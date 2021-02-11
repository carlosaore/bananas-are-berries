

const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.ObjectId;

const MessageSchema = new mongoose.Schema({
  // id: ObjectId,
  senderNumber: Number,
  recepientNumber: Number,
  date: {type: Date, default: Date.now},
  status: String,
  message: String, 
  chiefId: String
});

module.exports = mongoose.model("Message", MessageSchema);