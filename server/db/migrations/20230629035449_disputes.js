/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('disputes', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').defaultTo(Date.now())
    table.integer('user_id')
    table.integer('infringement')
    table.string('registration')
    table.string('offence')
    table.string('date_issued')
    table.string('time_issued')
    table.string('location')
    table.integer('amount')
    table.string('status').defaultTo('New')
    table.string('recipient').defaultTo('chrisswan1612@gmail.com')
    table.string('thread_id').defaultTo(null)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('disputes')
}
