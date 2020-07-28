const express = require('express')
const { getConfigPropertyByEnv } = require('./src/utils/resolve_env')

const app = express()

app.use(express.static(getConfigPropertyByEnv(process.env.NODE_ENV, 'staticDir')))
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(getConfigPropertyByEnv(process.env.NODE_ENV, 'port'))

module.exports = app