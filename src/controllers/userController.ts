import { Request, Response } from "express";
import { getProfile } from "../services/userService";
import User from "../models/User";
import { handleInternalServerError, handleNotFound, handleOk } from "../helper/responseHelper";

export const ReqGetProfile = async (req: Request | any, res: Response): Promise<void> => {
  const user : any = req.user;
  if (!user) return handleNotFound(res, "User not found");

  try {
    const profile: User | null = await getProfile(user.sub);
    if (user === null) return handleNotFound(res, "User not found");
  
    return handleOk(res, "Profile found", profile);
  } catch (error) {
    return handleInternalServerError(res, "Error getting profile", error);
  }
}