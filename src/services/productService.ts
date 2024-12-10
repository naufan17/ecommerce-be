import Product from "../models/Product";
import { create, deleteById, getAll, getById, updateById } from "../repositories/productRepository";

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const products: Product[] | undefined = await getAll();
    console.log("Services");
    if (!products) return undefined
  
    return products;      
  } catch (error) {
    throw new Error('Error getting products');
  }
}

export const createProduct =  async (
  name: string, 
  description: string, 
  price: number, 
  quantity: number, 
  category_id: number
): Promise<Product | undefined> => {
  try {
    const product: Product | undefined = await create(name, description, price, quantity, category_id);
    if (!product) return undefined

    return product;    
  } catch (error) {
    throw new Error('Error creating product');
  }
}

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const product: Product | undefined = await getById(id);
    if (!product) return null
  
    return product;      
  } catch (error) {
    throw new Error('Error getting product');
  }
}

export const updateProductById = async (
  id: string, 
  name: string, 
  description: string, 
  price: number, 
  quantity: number,
  category_id: number
): Promise<void> => {
  try {
    await updateById(id, name, description, price, quantity, category_id);    
  } catch (error) {
    throw new Error('Error updating product');
  }
}

export const deleteProductById = async (id: string): Promise<void> => {
  try {
    await deleteById(id);
  } catch (error) {
    throw new Error('Error deleting product');
  }
}