import DiscordJS, { Intents } from 'discord.js'
import dotnev from 'dotenv'
dotnev.config({ path: `${__dirname}/../.env` })

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Bot initialized.');
});

client.on('messageCreate', message => {
    if (message.content === 'test')
        message.reply({content: `I'm alive!`});
    if (message.content === `you're based on a new framework!`)
        message.reply({content: `I know 😎`})
})

client.login(process.env.TOKEN);