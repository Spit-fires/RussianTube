const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
  token: process.env.token, //Discord Bot Token
  prefix: "rt!" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.command({
  name: "ping", //Trigger name (command name)
  code: `Pong! $pingms` //Code
})

bot.readyCommand({
  channel: "", //You can use this or not
  code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder