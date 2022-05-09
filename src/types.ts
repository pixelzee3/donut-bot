import { SlashCommandBuilder } from '@discordjs/builders';
import { Collection, CommandInteraction } from 'discord.js';

interface DiscordCommand {
    data: SlashCommandBuilder,
    // TODO: specify what commands is supposed to be
    execute: (interaction: CommandInteraction, commands?) => Promise<void>;
}