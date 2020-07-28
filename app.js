const express = require('express')
const app = express()

app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(!isNaN(process.argv[2]) ? process.argv[2] : 3000)

module.exports = app