const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/messages');

const messageModel = mongoose.model('Message', Message);


/* GET messages */
router.get('/', function (req, res, next) {
    
    messageModel.find({}, function(err, docs){
        res.send(docs);
    })
    
});

router.post('/', function (req, res, next) {
    const message = new messageModel();
    message.senderNumber = 34343;
    message.recepientNumber = 343434;
    message.status = 'NEW';
    message.message = 'hello i am message';
    message.chiefId = 'chief1';
    message.save().then(function(err,res){
        console.log(err);
      });

    res.send('respond with a resource');
});


module.exports = router;