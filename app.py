# Import libraries
from dotenv import load_dotenv
import discord
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
client = discord.Client()

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(token)
