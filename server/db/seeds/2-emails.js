/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('emails').del()
  await knex('emails').insert([
    {
      id: 1,
      created_at: 1687147209343,
      dispute_id: 1,
      user_id: 1,
      from: 'user',
      content: 'Hey can I get out of this ticket please?',
    },
    {
      id: 2,
      created_at: 1687147209343,
      dispute_id: 1,
      user_id: 1,
      from: 'respondent',
      content: 'Hmm maybe, why?',
    },
    {
      id: 3,
      created_at: 1687147209343,
      dispute_id: 1,
      user_id: 1,
      from: 'user',
      content:
        "I think I deserve to have the fine waived, I'll pay the next one I promise",
    },
    {
      id: 4,
      created_at: 1687147209343,
      dispute_id: 2,
      user_id: 1,
      from: 'user',
      content: 'Please WCC, can I get out of this ticket?',
    },
    {
      id: 5,
      created_at: 1687147209343,
      dispute_id: 3,
      user_id: 1,
      from: 'user',
      content: 'Hi, can I not pay this?',
    },
    {
      id: 6,
      created_at: 1687147209343,
      dispute_id: 3,
      user_id: 1,
      from: 'respondent',
      content: 'Why?',
    },
    {
      id: 7,
      created_at: 1687147209343,
      dispute_id: 3,
      user_id: 1,
      from: 'user',
      content: "I just really don't want to.",
    },
    {
      id: 8,
      created_at: 1687147209343,
      dispute_id: 3,
      user_id: 1,
      from: 'respondent',
      content: 'Nah you need to pay it',
    },
    {
      id: 9,
      created_at: 1687147209343,
      dispute_id: 4,
      user_id: 1,
      from: 'user',
      content: 'Let me off this ticket.',
    },
    {
      id: 10,
      created_at: 1687147209343,
      dispute_id: 4,
      user_id: 1,
      from: 'respondent',
      content: 'Okay',
    },
    {
      id: 11,
      created_at: 1687147209343,
      dispute_id: 5,
      user_id: 1,
      from: 'user',
      content: 'Can I get out of this fine?',
    },
    {
      id: 12,
      created_at: 1687147209343,
      dispute_id: 5,
      user_id: 1,
      from: 'respondent',
      content: 'You need to give us a reason',
    },
  ])
}
