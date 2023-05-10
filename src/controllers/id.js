const mongoose = require('mongoose');

const idSchema = new mongoose.Schema ({
  roomId: Number,
  pass: String,
  createdAt: {
    type: Date
  }
});

module.exports = mongoose.model("ID", idSchema)