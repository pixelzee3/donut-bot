import DiscordJS, { Intents } from 'discord.js'
import { token } from '../src/config/config.json';

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Bot initialized.');
});

client.on('messageCreate', message => {
})
client.login(token);