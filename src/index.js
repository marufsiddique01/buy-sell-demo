// import packages
const { response } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()

// import routes and assets
const quotes = require('./quotes.json')
const userRouter = require('./routes/userRoutes')
const noteRouter = require('./routes/noteRoutes')

// start app
const app = express()

// dotenv variables
const port = process.env.PORT || 5000
const mongodbURL = process.env.MONGODB

// import mongoose
const mongoose = require('mongoose')

app.use(express.json())
// connect mongodb; if connected start the app
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('Connected to database')
    app.listen(port, () => {
      console.log('server started on the port: 5000')
    })
  })
  .catch((e) => {
    console.log(e)
  })

// express routers
app.use('/users', userRouter)
app.use('/notes', noteRouter)

// basic routes and http requests
app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/quotes', (req, res) => {
  // res.send('Quote')
  res.status(200).json(quotes)
})

app.get('/random', (req, res) => {
  let index = Math.floor(Math.random() * quotes.length)
  let quote = quotes[index]
  res.status(200).json(quote)
})
