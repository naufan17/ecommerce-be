import Product from "../models/Product";
import { create, deleteById, getAll, getById, updateById } from "../repositories/productRepository";
import { FormattedProduct } from "../types/FormattedProduct";

export const getAllProducts = async (): Promise<FormattedProduct[] | null> => {
  try {
    const products: Product[] | null = await getAll();
    if (!products) return null

    const formattedProducts: FormattedProduct[] = products.map((product: Product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      category: product.category.name
    }));
  
    return formattedProducts;      
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw new Error('Error creating product');
  }
}

export const getProductById = async (id: string): Promise<FormattedProduct | null> => {
  try {
    const product: Product | undefined = await getById(id);
    if (!product) return null
  
    const formattedProducts: FormattedProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      category: product.category.name
    };
  
    return formattedProducts;      
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw new Error('Error updating product');
  }
}

export const deleteProductById = async (id: string): Promise<void> => {
  try {
    await deleteById(id);
  } catch (error) {
    console.log(error);
    throw new Error('Error deleting product');
  }
}