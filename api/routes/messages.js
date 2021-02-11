const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
/* GET messages */
router.get('/', function (req, res, next) {
  Message.find({}, function (err, docs) {
    res.send(docs);
  })
});


// await Message.find({ name: 'john', age: { $gte: 18 } }).exec();


router.post('/', function (req, res, next) {




  const message = new Message({
    senderNumber: req.body.senderNumber,
    recepientNumber: req.body.recepientNumber,
    message: req.body.message,

    status: 'NOT_SENT',
    chiefId: req.body.chiefId
  });
  console.log(message);
  message.save();
  res.send('working');
});
module.exports = router;