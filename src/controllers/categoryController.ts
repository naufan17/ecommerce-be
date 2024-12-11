import { Request, Response } from "express";
import { getAllCategories } from "../services/categoryService";
import { handleInternalServerError, handleNotFound, handleOk } from "../helper/responseHelper";
import Category from "../models/Category";

export const ReqGetCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories: Category[] | null = await getAllCategories();
    if (categories === null) return handleNotFound(res, "No categories found");

    return handleOk(res, "Categories found", categories);
  } catch (error) {
    return handleInternalServerError(res, "Error getting categories", error);
  }
}