const mongoose = require("mongoose");
const { category } = require("../category");

const categorySchema = new mongoose.Schema({
  Points: {
    type: Number,
    // required: true,
  },
  category: {
    type: String
  }  
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;