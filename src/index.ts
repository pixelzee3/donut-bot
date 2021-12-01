const { token } = require(`${__dirname}/../config/config.json`);
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once('ready', () => {
    console.log('Bot initialized.');
});

client.login(token);