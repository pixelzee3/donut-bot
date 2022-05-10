import 'dotenv/config';
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
import * as fs from 'node:fs';

function deployCommands(global: boolean) {
    const rest = new REST({ version: '9' }).setToken(process.env.token);
    const commands = [];
    const commandFiles = fs
        .readdirSync(`${__dirname}/commands`)
        .filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`${__dirname}/commands/${file}`);
        commands.push(command.data.toJSON());
    }

    if (!global) {
        rest.put(
            Routes.applicationGuildCommands(
                process.env.clientId,
                process.env.guildId
            ),
            { body: commands }
        )
            .then(() =>
                console.log('Successfully registered application commands.')
            )
            .catch(console.error);
    } else if (global) {
        rest.put(Routes.applicationCommands(process.env.clientId), {
            body: commands,
        })
            .then(() =>
                console.log(
                    'Successfully registered application commands globally.'
                )
            )
            .catch(console.error);
    }
}

deployCommands(false);
