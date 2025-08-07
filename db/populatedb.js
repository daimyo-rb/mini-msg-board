#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  username VARCHAR ( 20 ),
  added TIMESTAMP
);

INSERT INTO messages (message, username, added)
SELECT * FROM (
VALUES
  ('Hi there!', 'Amando', now()),
  ('Hello World!', 'Charles', now())
) AS v(message, username, added)
 WHERE NOT EXISTS (
  SELECT 1 FROM messages
 );
 `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();