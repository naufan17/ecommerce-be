import { Request, Response } from "express";
import { getAllCategories } from "../services/categoryService";
import { handleInternalServerError, handleNotFound, handleOk } from "../helper/responseHelper";
import Category from "../models/Category";

export const ReqGetCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories: Category[] | null = await getAllCategories();
    if (categories === null) handleNotFound(res, "No categories found");

    handleOk(res, "Categories found", categories);
  } catch (error) {
    handleInternalServerError(res, "Error getting categories", error);
  }
}