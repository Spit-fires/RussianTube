const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  token: 'process.env.token',
  prefix: 'rt!'
})

bot.onMessage()

bot.loadCommands('./commands')

bot.readyCommand({
  channel: "",
  code: `$log[ready on $clientID]`
  
})
