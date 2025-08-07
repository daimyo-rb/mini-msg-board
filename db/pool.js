const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost', // or wherever the db is hosted
  user: 'user',
  database: 'messages',
  password: 'password',
  port: '5432' // The default port
});
// module.exports = new Pool({
//   host: process.env.DATABASE_HOST, // or wherever the db is hosted
//   user: process.env.DATABASE_USER,
//   database: process.env.DATABASE_NAME,
//   password: process.env.DATABASE_PASSWORD,
//   port: process.env.DATABASE_PORT // The default port
// });