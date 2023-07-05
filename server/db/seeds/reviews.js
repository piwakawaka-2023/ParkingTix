/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      f_name: 'Brindha',
      rating: 4,
      review:
        'Since I am so naughty I forget to pay for parking, luckily I can get out of my fines',
    },
    {
      id: 2,
      f_name: 'Jesse',
      rating: 5,
      review: 'Amazing service. Saved me thousands.',
    },
  ])
}
