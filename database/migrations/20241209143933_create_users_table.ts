import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.uuid("id").primary();
    table.string("name", 100).notNullable();
    table.string("email", 100).unique().notNullable();
    table.enum("gender", ["male", "female"]).notNullable();
    table.string("password", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users")
}