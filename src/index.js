// import packages
const { response } = require('express')
const express = require('express')

const quotes = require('./quotes.json')

// start app
const app = express()

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

app.listen(5000, () => {
  console.log('server started on the port: 5000')
})
