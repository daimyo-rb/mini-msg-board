const { Router } = require('express');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
indexRouter.get('/new', (req, res, next) => {
  res.render('form');
});
indexRouter.post('/new', (req, res, next) => {
  messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect('/');
});

module.exports = indexRouter;