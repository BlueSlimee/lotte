import { Client } from 'discord.js'
import * from './'

class EventRegistry {
    static registerEvents (client: Client) {
        client.on('ready', () => new Ready(client).on())
        client.on('message', (message) => new Message(client).on(message))
    }
}

export default EventRegistry