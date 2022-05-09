import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { DiscordCommand } from '../types';

const user: DiscordCommand = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply(`Username: ${interaction.user.tag}`);
    },
};

module.exports = user;
