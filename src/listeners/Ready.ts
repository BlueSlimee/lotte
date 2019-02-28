import { Client } from 'discord.js'

class Ready {
    constructor (client: Client) {
        this.client = client
    }
    
    on () {
        console.log(`Docbot is online. Guild count: ${this.client.guilds.length}`)
    }
}