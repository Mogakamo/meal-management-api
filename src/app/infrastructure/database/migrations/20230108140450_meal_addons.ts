import { Knex } from 'knex';

const tableName = 'meal_addons';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.integer('category').unsigned();
    table
    .foreign('category')
    .references('id')
    .inTable('addon_categories')
    .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}
