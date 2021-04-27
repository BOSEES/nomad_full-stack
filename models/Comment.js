const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is require"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const model = mongoose.model("Comment", CommentSchema);

module.exports = CommentSchema;