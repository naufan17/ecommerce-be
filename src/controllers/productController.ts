import { Request, Response } from "express";
import { getAllProducts, getProductById } from "../services/productService";
import Product from "../models/Product";
import { handleNotFound, handleOk, handleInternalServerError } from "../helper/responseHelper";

export const ReqGetAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products: Product[] | undefined = await getAllProducts();
    console.log("Controller");
    if (!products) handleNotFound(res, "No products found");

    handleOk(res, "Products found", products);
  } catch (error) {
    handleInternalServerError(res, "Error getting products", error);
  }
}

export const ReqCreateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    
  } catch (error) {
    
  }
}

export const ReqGetProductById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;

  try {
    const product: Product | null = await getProductById(id);
    if (!product) handleNotFound(res, "Product not found");

    handleOk(res, "Product found", product);
  } catch (error) {
    handleInternalServerError(res, "Error getting product", error);
  }
}

export const ReqUpdateProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    
  } catch (error) {
    
  }
}

export const ReqDeleteProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    
  } catch (error) {
    
  }
}
