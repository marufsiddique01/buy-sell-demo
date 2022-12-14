const express = require('express')
const userRouter = express.Router()

userRouter.post('/signup', (req, res) => {
  res.status(200).json('signup route')
})
userRouter.post('/signin', (req, res) => {
  res.status(200).json('signin route')
})

module.exports = userRouter
