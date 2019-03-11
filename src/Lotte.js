const { Client, Config } = require('chariot.js')

module.exports = class Lotte extends Client {
  constructor (token) {
    super(new Config(
      token,
      `${__dirname}/commands`,
      {
        prefix: 'lotte ',
        owner: ['485837271967465472', '268526982222970880']
      },
      {
        defaultImageFormat: 'png',
        defaultImageSize: 1024
      }
    ))
  }
}
