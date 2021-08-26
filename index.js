const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  token: 'token',
  prefix: 'rt!'
})

bot.onMessage()

bot.loadCommands('./commands')

bot.readyCommand({
  channel: "",
  code: `$log[ready on $clientID]`
  
})
