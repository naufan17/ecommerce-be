import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    await knex("users").insert([
        { 
            id: uuidv4(),
            name: "Andi",
            email: "andi@gmail.com",
            gender: "male",
            password: await bcrypt.hash("passworduser", 10)
        }, 
        { 
            id: uuidv4(),
            name: "Budi",
            email: "budi@gmail.com",
            gender: "male",
            password: await bcrypt.hash("passworduser", 10)
        }, 
        { 
            id: uuidv4(),
            name: "Fina",
            email: "fina@gmail.com",
            gender: "female",
            password: await bcrypt.hash("passworduser", 10)
        },
        { 
            id: uuidv4(),
            name: "Fani",
            email: "fani@gmail.com",
            gender: "female",
            password: await bcrypt.hash("passworduser", 10)
        }

    ]);
};
