import { Request, Response } from "express";
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../services/productService";
import { handleNotFound, handleOk, handleInternalServerError, handleCreated, handleBadRequest } from "../helper/responseHelper";
import { FormattedProduct } from "../types/FormattedProduct";
import { validationResult } from "express-validator";

export const ReqGetAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: FormattedProduct[] | null = await getAllProducts();
    if (products === null) return handleNotFound(res, "No products found");

    return handleOk(res, "Products found", products);
  } catch (error) {
    return handleInternalServerError(res, "Error getting products", error);
  }
}

export const ReqCreateProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, description, price, quantity, category_id } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) return handleBadRequest(res, "Validation errors", errors.array());

  try {
    await createProduct(name, description, price, quantity, category_id);

    return handleCreated(res, "Product created");
  } catch (error) {
    return handleInternalServerError(res, "Error creating product", error);
  }
}

export const ReqGetProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;
  if (!id) return handleNotFound(res, "Product not found");

  try {
    const product: FormattedProduct | null = await getProductById(id);
    if (product === null) handleNotFound(res, "Product not found");

    return handleOk(res, "Product found", product);
  } catch (error) {
    return handleInternalServerError(res, "Error getting product", error);
  }
}

export const ReqUpdateProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;
  if (!id) return handleNotFound(res, "Product not found");

  const { name, description, price, quantity, category_id } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) return handleBadRequest(res, "Validation errors", errors.array());

  try {
    await updateProductById(id, name, description, price, quantity, category_id);

    return handleCreated(res, "Product updated");
  } catch (error) {
    return handleInternalServerError(res, "Error updating product", error);
  }
}

export const ReqDeleteProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;
  if (!id) return handleNotFound(res, "Product not found");

  try {
    await deleteProductById(id);

    return handleOk(res, "Product deleted");
  } catch (error) {
    return handleInternalServerError(res, "Error deleting product", error);
  }
}
