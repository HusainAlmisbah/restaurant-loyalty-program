const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  Points: {
    type: Number,
    // required: true,
  },
  Category: {
    type: String
  }  
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;