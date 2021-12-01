const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config/config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Bot initialized.');
});

client.login(token);