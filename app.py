# TODO: Somehow make bot commands scalable


# Import libraries
from dotenv import load_dotenv
from discord.ext import commands
import os
import logging

# Define logger
logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)

# Load environment variables
try:
    load_dotenv()
    token = os.environ['token']
except Exception as err:
    print("❌ Error: No token found")
    print("==========================")
    raise err

# Define Discord bot
bot = commands.Bot(command_prefix='d!')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

# Run bot
bot.run(token)
