import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("categories").del();

    await knex("categories").insert([
        { 
            id: 1, 
            name: "Laptop"
        },
        { 
            id: 2, 
            name: "Notebook"
        },
        { 
            id: 3, 
            name: "Tablet"
        },
        { 
            id: 4, 
            name: "Personal Computer"
        },
    ]);
};
