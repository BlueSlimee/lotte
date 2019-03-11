const { RichEmbed } = require('chariot.js')
const GeniusAPI = require('genius-api')
const Lyricist = require('lyricist')
const Command = require('../structures/Command')

let genius = new GeniusAPI(process.env.GENIUS_TOKEN)
let lyricist = new Lyricist(process.env.GENIUS_TOKEN)

function chunkString (str) {
  return str.match(/(.|[\r\n]){1,1950}/g)
}

class Lyrics extends Command {
  constructor () {
    super()

    this.name = 'lyrics'
    this.aliases = ['letra', 'lyric']
    this.description = 'Exibe a letra de uma música'
    this.category = 'util'
  }

  async run (context) {
    if (!context.args[0]) return context.message.channel.createMessage('Você deve colocar o nome de uma música!')
    genius.search(context.args.join(' ')).then(async (response) => {
      if (!response || !response.hits || !response.hits[0]) return context.message.channel.createMessage('Não achei essa música!')

      let lyrics = await lyricist.song(response.hits[0].result.id, { fetchLyrics: true })
      if (!lyrics) context.send('Música não encontrada...')

      let embed = new RichEmbed()
        .setTitle('Ver letra em genius.com')
        .setDescription(`Exibindo letra de \`${lyrics.title}\`, por \`${lyrics.album.artist.name}\`, do álbum \`${lyrics.album.name}\``)
        .setThumbnail(lyrics.album.cover_art_url)
        .setColor(0xe8f442)
        .setUrl(lyrics.url)
        .setFooter(lyrics.album.artist.name, lyrics.primary_artist.image_url)

      await context.send(embed)

      let chunks = chunkString(lyrics.lyrics)
      chunks.forEach(async (chunk) => {
        await context.send(`\`\`\`yaml\n${chunk}\`\`\``)
      })
    })
  }
}

module.exports = new Lyrics()
