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
    senderNumber: req.body.senderNumber,
    recepientNumber: req.body.recepientNumber,
    status: req.body.status,
    message: req.body.message,
    chiefId: req.body.chiefId
  });
  console.log(message);
  message.save();
  res.send('Message saved');
});
module.exports = router;