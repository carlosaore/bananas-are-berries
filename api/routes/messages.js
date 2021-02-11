const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
/* GET messages */
router.get('/', function (req, res, next) {
  Message.find({}, function (err, docs) {
    res.send(docs);
  })
});
router.post('/', function (req, res, next) {
  const message = new Message({
    senderNumber: 34343,
    recepientNumber: 343434,
    status: 'NEW',
    message: 'hello i am message',
    chiefId: 'chief1'
  });
  console.log(message);
  message.save();
  res.send('working with / blalalfmalkf');
});
module.exports = router;