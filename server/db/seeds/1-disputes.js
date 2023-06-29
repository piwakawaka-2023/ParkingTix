/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('disputes').del()
  await knex('disputes').insert([
    {
      id: 1,
      created_at: 1687147209343,
      user_id: 1,
      infringement: 1234,
      registration: 'EKTAJ',
      date_issued: '2023/01/01',
      time_issued: '12:50:00',
      location: 'Cuba Street',
      amount: 100,
      status: 'In Progress',
    },
    {
      id: 2,
      created_at: 1687147209343,
      user_id: 1,
      infringement: 420,
      registration: 'DLW137',
      date_issued: '2023/04/21',
      time_issued: '01:30:00',
      location: 'Lambton Quay',
      amount: 40,
      status: 'Pending Response',
    },
    {
      id: 3,
      created_at: 1687147209343,
      user_id: 1,
      infringement: 69,
      registration: 'SCARN1',
      date_issued: '2023/05/22',
      time_issued: '15:15:00',
      location: 'Aro Street',
      amount: 200,
      status: 'Appeal Failed',
    },
    {
      id: 4,
      created_at: 1687147209343,
      user_id: 1,
      infringement: 8987,
      registration: 'IEU089',
      date_issued: '2023/02/11',
      time_issued: '10:23:00',
      location: 'Webb Street',
      amount: 30,
      status: 'Resolved',
    },
    {
      id: 5,
      created_at: 1687147209343,
      user_id: 1,
      infringement: 5173,
      registration: 'HEY123',
      date_issued: '2023/01/01',
      time_issued: '12:50:00',
      location: 'Bidwill Street',
      amount: 40,
      status: 'In Progress (User Override)',
    },
  ])
}
