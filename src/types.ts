import { SlashCommandBuilder } from '@discordjs/builders';
import { Collection, CommandInteraction } from 'discord.js';

export interface DiscordCommand {
    data: SlashCommandBuilder;
    execute: (
        interaction: CommandInteraction,
        commands?: Collection<string, any>
    ) => Promise<void>;
}
