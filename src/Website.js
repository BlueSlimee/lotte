const express = require('express')
const apiRoute = require('./routes/api')
const mainRoute = require('./routes/main')

module.exports = class Website {
  constructor () {
    this.app = express()
    this.app.use('/api/v1/', apiRoute)
    this.app.use('/', mainRoute)

    this.app.listen(process.env.PORT || 3000)
  }
}
