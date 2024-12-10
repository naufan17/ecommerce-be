import { Model } from "objection";

class User extends Model {
  id!: string;
  name!: string;
  email!: string;
  gender!: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static get tableName() {
    return "users";
  }
}

export default User;