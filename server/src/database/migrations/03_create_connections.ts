import * as Knex from "knex";

export async function up(Knex: Knex) {
  return Knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    // criando um relacionamento
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // quando houver aquela conexão
    table
      .timestamp("created_at")
      .defaultTo(Knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

export async function down(Knex: Knex) {
  return Knex.schema.dropTable("connections");
}
