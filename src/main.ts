// TODO: Read and execute external command files here and in deploy-commands.ts

// Require the necessary discord.js classes
import fs from 'node:fs';
import { Client, Collection, Intents } from 'discord.js';

// Create a new client instance and command collections
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

// Loop over commandFiles and register them in commands
// ! Looping over command files won't work with module bundlers. Must revert project to a normal TypeScript project without any module bundlers.
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
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
