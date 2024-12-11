import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("products", (table: Knex.TableBuilder) => {
    table.uuid("id").primary();
    table.string("name", 100).notNullable();
    table.text("description").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("quantity", 10).notNullable();
    table.string("image", 255).notNullable();
    table.bigIncrements("category_id").references('id').inTable('categories').notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("products")
}
