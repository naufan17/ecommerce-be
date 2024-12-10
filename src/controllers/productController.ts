import { Request, Response } from "express";
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../services/productService";
import { handleNotFound, handleOk, handleInternalServerError, handleCreated } from "../helper/responseHelper";
import { FormattedProduct } from "../types/FormattedProduct";

export const ReqGetAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: FormattedProduct[] | null = await getAllProducts();
    if (!products) handleNotFound(res, "No products found");

    handleOk(res, "Products found", products);
  } catch (error) {
    handleInternalServerError(res, "Error getting products", error);
  }
}

export const ReqCreateProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, description, price, quantity, category_id } = req.body;

  try {
    await createProduct(name, description, price, quantity, category_id);

    handleCreated(res, "Product created");
  } catch (error) {
    handleInternalServerError(res, "Error creating product", error);
  }
}

export const ReqGetProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;

  try {
    const product: FormattedProduct | null = await getProductById(id);
    if (!product) handleNotFound(res, "Product not found");

    handleOk(res, "Product found", product);
  } catch (error) {
    handleInternalServerError(res, "Error getting product", error);
  }
}

export const ReqUpdateProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;
  const { name, description, price, quantity, category_id } = req.body;

  try {
    await updateProductById(id, name, description, price, quantity, category_id);

    handleCreated(res, "Product updated");
  } catch (error) {
    handleInternalServerError(res, "Error updating product", error);
  }
}

export const ReqDeleteProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;

  try {
    await deleteProductById(id);

    handleOk(res, "Product deleted");
  } catch (error) {
    handleInternalServerError(res, "Error deleting product", error);
  }
}
