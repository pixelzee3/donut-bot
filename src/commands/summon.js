const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summon')
		.setDescription('Repeatedly joins and leaves the voice channel to summon deafened users.'),
	async execute(interaction) {
		await interaction.reply('Feature not ready yet.');
	},
};