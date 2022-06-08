# TODO: Somehow make bot commands scalable. Current solution enables the bot to use commands from external modules. However, they must be imported manually. Next step is to iteratively import all the modules in the 'commands' folder. Potentially useful resource: https://www.tutorialspoint.com/Can-we-iteratively-import-python-modules-inside-a-for-loop


# Import libraries
from dotenv import load_dotenv
from discord.ext import commands
import os
import logging
import sys

# Import modules
from commands.test import test
sys.path.append('commands')

# Define logger
logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(
    filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter(
    '%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
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
bot = commands.Bot(command_prefix='%')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

@commands.command()
async def hello(ctx: commands.Context):
    await ctx.send('Hello world!')

bot.add_command(hello)
bot.add_command(test)

# Run bot
bot.run(token)
