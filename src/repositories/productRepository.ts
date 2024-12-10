import Product from "../models/Product";

export const getAll = async (): Promise<Product[] | undefined> => {
  return await Product
    .query()
    .withGraphFetched("category");
}

export const create = async (
  name: string, 
  description: string, 
  price: number, 
  quantity: number,
  category_id: number
): Promise<Product> => {
  return await Product.query().insert({ 
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
    .withGraphFetched("category");
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
