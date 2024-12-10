import type { Knex } from "knex";
import dotenv from "dotenv";
import { DatabaseCofig } from "./src/types/DatabaseConfig";

dotenv.config();

const { 
  DEVELOPMENT_DATABASE_URL,
  STAGING_DATABASE_URL,
} = process.env as Required<DatabaseCofig>;

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: DEVELOPMENT_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  staging: {
    client: "postgresql",
    connection: STAGING_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};

export default knexConfig;