import 'dotenv/config';
import { Client, Collection, Intents } from 'discord.js';
import * as fs from 'node:fs';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Create a new collection for the commandFiles
const commandFiles = fs
    .readdirSync(`${__dirname}/commands`)
    .filter((file) => file.endsWith('.ts'));

// Loop over commandFiles and register them in the commands collection/hashmap
const commands = new Collection();

for (const file of commandFiles) {
    const command = require(`${__dirname}/commands/${file}`);
    commands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// When the client receives an interaction, run the command if available in the commands collection
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = commands.get(commandName);

    if (!command) return;

    try {
        // TODO: Create Discord command interface so TypeScript knows what a command object should be like.
        // await command.execute(interaction);
    } catch (err) {
        console.log(err);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
        });
    }
});

// Login to Discord with your client's token
client.login(process.env.token);
