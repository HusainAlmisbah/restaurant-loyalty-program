const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  mealName: {
    type: String,
    // required: true,
  },
  Price: {
    type: Number,
    // required: true,
  },
  Points: {
    type: Number,
    // required: true,
  }
});

const menuItem = mongoose.model("User", menuSchema);

module.exports = menuItem;