import Category from "../models/Category";
import { getAll } from "../repositories/categoryRepository";

export const getAllCategories = async (): Promise<Category[] | null> => {
  try {
    const categories: Category[] | null = await getAll();
    if (!categories) return null

    return categories;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting categories');
  }  
};