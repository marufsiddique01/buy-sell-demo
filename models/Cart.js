// import packages
const mongoose = require('mongoose')

// create schema of Cart collection
const CartSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productID: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
)

// export model
module.exports = mongoose.model('Cart', CartSchema)
