import { Model } from "objection";

class Category extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static get tableName(): string {
    return "categories";
  }
}

export default Category;