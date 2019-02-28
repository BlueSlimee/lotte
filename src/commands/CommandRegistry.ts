import { Client, Collection } from 'discord.js'
import PingCommand from './vanilla/PingCommand'
import MDNCommand from './vanila/MDNCommand'

import Command from './Command'

class CommandRegistry {
    commands: Collection<String, Command> = new Collection()
    constructor (client: Client) {
        this.client = client
        this._registerCommands()
    }
    _registerCommands () {
        /* Utils */
        this.commands.set('ping', new PingCommand(this.client))
        
        /* Documentation commands */
        this.commands.set('mdn', new MDNCommand(this.client))
    }
    
    getCommand (name: String): Command {
        return this.commands.get(name) || this.commands.find(cmd => cmd.aliases.includes(name))
    }
}

export default CommandRegistry