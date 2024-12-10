import { Request, Response } from "express"; 
import User from "../models/User";
import { login, register } from "../services/authService";
import { handleBadRequest, handleConflict, handleCreated, handleInternalServerError, handleNotFound, handleOk, handleUnauthorized } from "../helper/responseHelper";
import { validationResult } from "express-validator";

export const ReqRegister = async (req: Request, res: Response): Promise<void> => {
  const { name, email, gender, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) return handleBadRequest(res, "Validation errors", errors.array());

  try {
    const user: User | null = await register(name, email, gender, password);
    if (user === null) return handleConflict(res, "User already exists");

    return handleCreated(res, "User created");
  } catch (error) {
    return handleInternalServerError(res, "Error creating user", error);
  }
}

export const ReqLogin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) return handleBadRequest(res, "Validation errors", errors.array());

  try {
    const accessToken: string | null = await login(email, password);
    if (accessToken === null) return handleUnauthorized(res, "Invalid email or password");

    return handleOk(res, "User logged in", { accessToken });
  } catch (error) {
    return handleInternalServerError(res, "Error logging in", error);
  }
}
