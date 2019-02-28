import Command from '../Command'

export default class PingCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'ping',
            aliases: ['pong']
        })
    }
    
    run (message, args, { t }) {
        message.channel.send(`:ping_pong: Pong.\nWS: \`${this.client.ping}\``)
    }
}