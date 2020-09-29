import knex from 'knex';
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('github_id').notNullable();
    table.string('github_username').notNullable();
    table.string('avatar_url').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}