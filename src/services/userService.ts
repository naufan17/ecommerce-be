import User from "../models/User";
import { getProfileById } from "../repositories/userRepository";

export const getProfile = async (id: string): Promise<User | null> => {
  try {
    const user: User | undefined = await getProfileById(id);
    if (!user) return null;

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting profile');
  }
}