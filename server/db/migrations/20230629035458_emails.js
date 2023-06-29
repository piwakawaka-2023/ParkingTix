/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('emails', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').defaultTo(Date.now())
    table.integer('dispute_id')
    table.string('content')
  })
}

exports.down = function (knex) {
  return knex.schemaknex.dropTable('disputes')
}
