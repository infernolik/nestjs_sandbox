const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  idNum: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  paramToFind: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
