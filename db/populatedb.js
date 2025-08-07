#! /usr/bin/env node
// require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  username VARCHAR ( 20 ),
  added TIMESTAMP
);

INSERT INTO messages (message, username, added)
VALUES
  ('Hi there!', 'Amando', now()),
  ('Hello World!', 'Charles', now())
;`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: 'localhost', // or wherever the db is hosted
    user: 'user',
    database: 'messages',
    password: 'password',
    port: '5432' // The default port
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();