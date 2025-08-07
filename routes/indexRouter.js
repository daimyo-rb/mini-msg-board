const { Router } = require('express');

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
indexRouter.get('/messages/:id', (req, res, next) => {
  const msg = messages.find((msg) => msg.id == req.params.id);
  res.render('message', { message: msg });
});
indexRouter.get('/new', (req, res, next) => {
  res.render('form');
});
indexRouter.post('/new', (req, res, next) => {
  const nextId = messages[messages.length - 1].id + 1;
  messages.push({ id: nextId, text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect('/');
});

module.exports = indexRouter;