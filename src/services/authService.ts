import User from "../models/User";
import { create, getByEmail } from "../repositories/userRepository";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const register = async (
  name: string,
  email: string,
  gender: string,
  password: string
): Promise<User | null> => {
  try {
    const user: User | undefined = await getByEmail(email);
    if (user) return null;

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const newUser: User = await create(name, email, gender, hashedPassword);

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user');
  }
}

export const login = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const user: User | undefined = await getByEmail(email);
    if (!user) return null;

    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    const accessToken: string = generateToken({ sub: user.id });

    return accessToken;
  } catch (error) {
    console.log(error);
    throw new Error('Error logging in');
  }
}
