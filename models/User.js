// import packages
const mongoose = require('mongoose')

// create schema of Users collection
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, default: null },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// export model
module.exports = mongoose.model('Users', UserSchema)
