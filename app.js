const express = require('express');
const path = require('node:path');

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

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`mini msg board app listening on ${PORT}`);
});