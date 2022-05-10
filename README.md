# Donut Bot
A fancy-ass Discord bot with various features, including **summon**.

![The Donut logo.](./media/donut-logo-rotated.jpg)

## Usage
The Donut Bot can be built and run with little configuration. The normal procedure for doing so is as follows:
### Create `.env` file with the `token` and `deployCommandsGlobally` properties
*.env file (example)*
```
token=NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I
deployCommandsGlobally=true
```
### Build the bot using the `build` command
```
npm run build
```
TypeScript compiler will bundle the source files and environment variables into the `./dist` directory.
### Deploy bot commands
```
node dist/deploy-commands.js
```
### Run the bot using Node.js
```
node dist/main.js
```