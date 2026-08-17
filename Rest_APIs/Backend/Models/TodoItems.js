const mongoose = require("mongoose");

const todoItemsSchema = new mongoose.Schema({
  tasks: { type: String, required: true },

  date: { type: Date, default: Date.now, required: true },

  createdAt: { type: Date, default: Date.now },

  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("TodoItems", todoItemsSchema);
