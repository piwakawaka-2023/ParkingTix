/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('disputes', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').defaultTo(Date.now())
    table.integer('user_id')
    table.integer('infringement')
    table.string('registration')
    table.date('date_issued')
    table.string('time_issued')
    table.string('location')
    table.integer('amount')
    table.string('status').defaultTo('New')
  })
}

exports.down = function (knex) {}
