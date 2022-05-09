import { CommandInteraction } from 'discord.js';
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply(`Username: ${interaction.user.tag}`);
    },
};
