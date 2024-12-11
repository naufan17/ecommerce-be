import { Request, Response, NextFunction } from "express";
import { handleUnauthorized } from "../helper/responseHelper";
import { verifyToken } from "../utils/jwt";
import { JsonWebTokenError } from "jsonwebtoken";

export const authetication = (req: Request | any, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (!token) return handleUnauthorized(res, "Invalid credentials");

  try {
    if (token) {
      const decoded: any = verifyToken(token);

      req.user = decoded;  

      next();
    } else {
      return handleUnauthorized(res, "Invalid credentials");
    }      
  } catch (error) {
    return handleUnauthorized(res, "Invalid credentials");
  }
};