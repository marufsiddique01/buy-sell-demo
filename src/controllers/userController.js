const userModel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'NOTEAPI'

// Signup function for new users
const signup = async (req, res) => {
  const { username, email, password } = req.body
  try {
    // check existing user or not

    const existingUser = await userModel.findOne({ email: email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // hash password generate

    const hashedPassword = await bcrypt.hash(password, 10)

    // create users

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    })

    // token generate

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      SECRET_KEY,
    )
    // if everything is okay then sending the response and token
    res.status(201).json({
      user: result,
      token: token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// Signin function to let users login
const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    // check user exist or not
    const existingUser = await userModel.findOne({ email: email })
    if (!existingUser) {
      return res.status(400).json({ message: 'User Not Found' })
    }

    // checking password matching or not
    const matchPassword = await bcrypt.compare(password, existingUser.password)
    if (!matchPassword) {
      return res.status(400).json({ message: 'Wrong Password' })
    }

    // Generating token when sign in

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      SECRET_KEY,
    )
    // if everything is okay then sending the response with user info and token
    res.status(201).json({
      user: existingUser,
      token: token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = { signup, signin }
