import User from "../models/User";
import { v4 as uuidv4 } from 'uuid';

export const create = async (
  name: string,
  email: string,
  gender: string,
  password: string
): Promise<User> => {
  const id: string = uuidv4();

  return await User.query().insert({
    id,
    name,
    email,
    gender,
    password
  });
}

export const getByEmail = async (email: string): Promise<User | undefined> => {
  return await User
    .query()
    .select("id", "email", "password")
    .where("email", email)
    .first();
}

export const getProfileById = async (id: string): Promise<User | undefined> => {
  return await User
    .query()
    .select("name", "email", "gender")
    .findById(id);
};
