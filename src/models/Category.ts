import { Model } from "objection";

class Category extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export default Category;