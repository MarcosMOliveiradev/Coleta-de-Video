const mongoose = require('mongoose');

const idSchema = new mongoose.Schema ({
  roomId: Number,
  pass: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ID", idSchema)