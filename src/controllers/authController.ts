import { Request, Response } from "express"; 
import User from "../models/User";
import { login, register } from "../services/authService";
import { handleConflict, handleCreated, handleInternalServerError, handleNotFound, handleOk, handleUnauthorized } from "../helper/responseHelper";

export const ReqRegister = async (req: Request, res: Response): Promise<void> => {
  const { name, email, gender, password } = req.body;

  try {
    const user: User | null = await register(name, email, gender, password);
    if (user === null) handleConflict(res, "User already exists");

    handleCreated(res, "User created");
  } catch (error) {
    handleInternalServerError(res, "Error creating user", error);
  }
}

export const ReqLogin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const accessToken: string | null = await login(email, password);
    if (accessToken === null) handleUnauthorized(res, "Invalid email or password");

    handleOk(res, "User logged in", { accessToken });
  } catch (error) {
    handleInternalServerError(res, "Error logging in", error);
  }
}
