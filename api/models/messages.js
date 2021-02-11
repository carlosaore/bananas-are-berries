const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Message = new Schema({
  id: ObjectId,
  senderNumber: Number,
  recepientNumber: Number,
  date: {type: Date, default: Date.now},
  status: String,
  message: String, 
  chiefId: String
});