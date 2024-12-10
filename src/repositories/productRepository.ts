import Product from "../models/Product";
import { v4 as uuidv4 } from 'uuid';

export const getAll = async (): Promise<Product[] | null> => {
  return await Product
    .query()
    .select("id", "name", "description", "price", "quantity")
    .withGraphFetched("category")
    .modifyGraph('category', (builder) => { 
      builder.select('name')
    });
}

export const create = async (
  name: string, 
  description: string, 
  price: number, 
  quantity: number,
  category_id: number
): Promise<Product> => {
  const id: string = uuidv4();

  return await Product.query().insert({
    id,
    name, 
    description, 
    price, 
    quantity,
    category_id
  });
}

export const getById = async (id: string): Promise<Product | undefined> => {
  return await Product
    .query()
    .findById(id)
    .select("id", "name", "description", "price", "quantity")
    .withGraphFetched("category")
    .modifyGraph('category', (builder) => { 
      builder.select('name')
    });
}

export const updateById = async (
  id: string, 
  name: string, 
  description: string, 
  price: number, 
  quantity: number,
  category_id: number
): Promise<any> => {
  return await Product
    .query()
    .findById(id)
    .update({ 
      name, 
      description, 
      price, 
      quantity,
      category_id
  });
}

export const deleteById = async (id: string): Promise<any> => {
  return await Product
    .query()
    .findById(id)
    .delete();
}
