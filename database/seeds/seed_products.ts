import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { 
            id: uuidv4(),
            name: "Lenovo Ideapad",
            description: "Intel Core i5, 8GB RAM, 256GB SSD, 14 inch",
            price: 8000000.00,
            quantity: 20,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Lenovo Yoga",
            description: "Intel Core i7, 16GB RAM, 1TB SSD, 14.5 inch",
            price: 20000000.00,
            quantity: 15,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Asus VivoBook",
            description: "Intel Core i7, 16GB RAM, 512GB SSD, 14 inch",
            price: 15000000.00,
            quantity: 20,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Asus Zenbook",
            description: "Intel Core Ultra 7, 32GB RAM, 1TB SSD, 14 inch",
            price: 17500000.00,
            quantity: 15,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Acer Aspire",
            description: "Intel Core i5, 8GB RAM, 512GB SSD, 14 inch",
            price: 10000000.00,
            quantity: 20,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Acer Swift",
            description: "Intel Core Ultra 5, 16GB RAM, 512GB SSD, 14 inch",
            price: 12500000.00,
            quantity: 15,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Macbook M4 Pro",
            description: "M4, 16GB RAM, 512GB SSD, 14 inch",
            price: 28000000.00,
            quantity: 10,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Macbook M3 Air",
            description: "M3, 16GB RAM, 256GB SSD, 13 inch",
            price: 16500000.00,
            quantity: 10,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "HP Pavilion",
            description: "Intel Core i5, 16GB RAM, 512GB SSD, 14 inch",
            price: 10000000.00,
            quantity: 15,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Microsoft Surface",
            description: "Intel Core i5, 16GB RAM, 512GB SSD, 13.3 inch",
            price: 15000000.00,
            quantity: 5,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
        { 
            id: uuidv4(),
            name: "Asus ROG Zephyrus",
            description: "Intel Core Ultra 9, 32GB RAM, 1TB SSD, 15.6 inch",
            price: 35000000.00,
            quantity: 5,
            image: "https://res.cloudinary.com/ddpbwjjfz/image/upload/v1733881250/ecommerce/eznidmd22q4bqi59nsju.jpg",
            category_id: 1
        },
    ]);
};
