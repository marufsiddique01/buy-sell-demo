// import packages
const mongoose = require('mongoose')

// create schema of Products collection
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    tags: { type: Array },
  },
  { timestamps: true },
)

// export model
module.exports = mongoose.model('Product', ProductSchema)
