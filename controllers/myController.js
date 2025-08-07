const db = require('../db/queries');

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: "Mini Messageboard", messages: messages });
}
async function getMessageById(req, res) {
  const message = await db.getMessageById(req.params.id)
  res.render('message', { message: message });
}
function creatNewMessageGet(req, res) {
  res.render('form');
}
async function createNewMessagePost(req, res) {
  await db.insertNewMessage(req.body.message, req.body.author);
  res.redirect('/');
}

module.exports = {
  getMessages,
  getMessageById,
  creatNewMessageGet,
  createNewMessagePost
};