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
  },
  Category: {
    type: String
  }  
});

const menuItem = mongoose.model("Menu", menuSchema);

module.exports = menuItem;