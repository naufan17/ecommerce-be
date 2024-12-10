import Category from "../models/Category";

export const getAll = async (): Promise<Category[] | null> => {
  return await Category
    .query()
    .select("id", "name");
};