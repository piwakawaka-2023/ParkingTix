/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').defaultTo(Date.now())
    table.string('f_name')
    table.string('l_name')
    table.string('profile_image').defaultTo(null)
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
