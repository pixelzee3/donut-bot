# Donut Bot
A fancy-ass Discord bot with various features, including **summon**.
![The Donut logo.](./media/donut-logo-rotated.jpg)
## Usage
The bot can be easily installed with little configuration. Once the environment variables are set up, the bot can be built and run using node.

### Example
Create `.env` file in root directory and set a variable for DISCORD_TOKEN
```
DISCORD_TOKEN=NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I
```
Then, build the bot using the build command
```
npm run build
``` 
Finally, run the bot
```
node dist/main.js
```