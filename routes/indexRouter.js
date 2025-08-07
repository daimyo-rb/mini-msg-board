const { Router } = require('express');
const db = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', async (req, res, next) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
indexRouter.get('/messages/:id', async (req, res, next) => {
  const message = await db.getMessageById(req.params.id)
  res.render('message', { message: message });
});
indexRouter.get('/new', (req, res, next) => {
  res.render('form');
});
indexRouter.post('/new', async (req, res, next) => {
  await db.insertNewMessage(req.body.message, req.body.author);
  res.redirect('/');
});

module.exports = indexRouter;