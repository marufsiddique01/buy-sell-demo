// packages import here
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

// setup dot env
dotenv.config()

// start express app
const app = express()

// mongodb setup
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((e) => {
    console.log(e)
  })

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} `)
})
