const { Router } = require('express');
const myController = require('../controllers/myController');
const db = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', myController.getMessages);
indexRouter.get('/messages/:id', myController.getMessageById);
indexRouter.get('/new', myController.creatNewMessageGet);
indexRouter.post('/new', myController.createNewMessagePost);

module.exports = indexRouter;