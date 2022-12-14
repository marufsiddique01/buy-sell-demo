const express = require('express')
const noteRouter = express.Router()

noteRouter.get('/', (req, res) => {
  res.status(200).json('Notes Get req')
})
noteRouter.post('/', (req, res) => {
  res.status(200).json('Note Post req')
})

module.exports = noteRouter
