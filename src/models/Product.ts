import { Model } from "objection";
import Category from "./Category";

class Product extends Model {
  id!: string;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  category_id!: number;
  category!: Category;
  createdAt!: Date;
  updatedAt!: Date;


  static get tableName(): string {
    return "products";
  }

  static get relationMappings(): any {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "products.category_id",
          to: "categories.id"
        }
      }
    }
  }
}

export default Product;