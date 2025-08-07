const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM MESSAGES;");
  console.log(rows);
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM MESSAGES WHERE id = $1;", [id]);
  if (rows.length > 1) {
    throw new Error(`${rows.length} matches found by id (expected 1)`);
  }
  return rows[0];
}

async function insertNewMessage(message, username) {
  await pool.query("INSERT INTO messages (message, username, added) VALUES ($1, $2, $3);",
    [message, username, new Date()]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertNewMessage
}