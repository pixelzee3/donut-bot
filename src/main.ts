import 'dotenv/config';
import { Client, Collection, Intents } from 'discord.js';
import * as fs from 'node:fs';

// Create a new client instance and command collections
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = new Collection();
const commandFiles = fs
  .readdirSync(`${__dirname}/commands`)
  .filter((file) => file.endsWith('.ts'));

// Loop over commandFiles and register them in commands
for (const file of commandFiles) {
  const command = require(`${__dirname}/commands/${file}`);
  commands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply('Server info.');
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  }
});

// Login to Discord with your client's token
client.login(process.env.token);
