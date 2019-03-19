const Lotte = require('./src/Lotte')
// const Website = require('./src/Website')

const lotte = new Lotte(process.env.DISCORD_TOKEN)
// const website = new Website()

lotte.connect()
