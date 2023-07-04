/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments('id')
    table.string('f_name')
    table.integer('rating')
    table.string('review')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}

