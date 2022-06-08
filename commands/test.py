from discord.ext import commands

@commands.command()
async def test(ctx: commands.Context):
    await ctx.send("It's working!")