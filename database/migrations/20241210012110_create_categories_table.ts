import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("categories", (table: Knex.TableBuilder) => {
    table.bigIncrements("id").primary();
    table.string("name", 100).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("categories")
}

