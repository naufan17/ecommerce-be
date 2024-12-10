import { Request, Response, NextFunction } from "express";
import { handleUnauthorized } from "../helper/responseHelper";
import { verifyToken } from "../utils/jwt";

export const authetication = (req: Request | any, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];

  if (token) {
    const decoded: any = verifyToken(token);
    if (!decoded) handleUnauthorized(res, "Invalid token");

    req.user = decoded;

    next();
  } else {
    handleUnauthorized(res, "Invalid credentials");
  }
};