const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  description: {
    type: String,
  },
  state: {
    type: String,
    default: "todo",
  },
  user_id: {
    type: String,
    required: true,
  },
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
