export default class Command {
    constructor (client, info) {
        this.client = client
        
        this.aliases = info.aliases || []
        this.userPermissions = info.userPermissions || []
        this.name = info.name || null
    }
}