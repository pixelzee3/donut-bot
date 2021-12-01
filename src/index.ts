import { token } from '../config/config.json';
import {Client, Intents } from 'discord.js';

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () => {
    console.log('Bot initialized.');
});

client.login(token);