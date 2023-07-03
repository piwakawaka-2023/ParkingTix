/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      created_at: 1687147209343,
      f_name: 'Ektaj',
      l_name: 'Piwakawaka',
      profile_image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/640px-Arnold_Schwarzenegger_1974.jpg',
      email: 'ek@taj.com',
      auth0_id: 'oauth2|100397450066733468144',
    },
    {
      id: 2,
      created_at: 1687147209343,
      f_name: 'Chris',
      l_name: 'Piwakawaka',
      profile_image:
        'https://www.thespruce.com/thmb/V1Z-qinMq2FFXCCWAss4mc71B3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mute-swan-adult-58ad87433df78c345b85b294.jpg',
      email: 'Chris@swan.com',
      auth0_id: 'oauth2|100397450066733468244',
    },
    {
      id: 3,
      created_at: 1687147209343,
      f_name: 'Callum',
      l_name: 'Piwakawaka',
      profile_image: 'https://i.redd.it/4pyu9sox9qs41.jpg',
      email: 'Cal@lum.com',
      auth0_id: 'oauth2|100397450066793468144',
    },
    {
      id: 4,
      created_at: 1687147209343,
      f_name: 'Brindha',
      l_name: 'Piwakawaka',
      profile_image:
        'https://img.dog-learn.com/dog-breeds/mastiff/mastiff-sz14.jpg',
      email: 'Brin@dha.com',
      auth0_id: 'auth0|648fd74773375442becf2cc6',
    },
    {
      id: 5,
      created_at: 1687147209343,
      f_name: 'Oscar',
      l_name: 'Piwakawaka',
      profile_image:
        'https://www.odt.co.nz/sites/default/files/story/2022/09/6xazhrxwvrma7ikqisv7ydbjhu.jpg',
      email: 'Os@car.com',
      auth0_id: 'google-oauth2|100397450063733468144',
    },
  ])
}
