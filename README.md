# Donut Bot
A fancy-ass Discord bot with various features, including **summon**.

![The Donut logo.](./media/donut-logo-rotated.jpg)

## Usage
The Donut Bot can be built and run with little configuration. The normal procedure for doing so is as follows:
### Create `.env` file with the `DISCORD_TOKEN` property
*.env file (example)*
```
DISCORD_TOKEN=NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I
```
### Build the bot using the `build` command
```
npm run build
```
Parcel will bundle the source files and environment variables into the `./dist` directory.
### Run the bot using Node.js
```
node dist/main.js
```