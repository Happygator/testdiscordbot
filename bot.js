const Discord = require('discord.js');
const client = new Discord.Client();
var roll1,roll2,roll3,roll4,roll5
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!help') {
    message.reply("!critixe gets critixe's attention, but if I find you misusing it there will be punishments.")
    message.reply("!roll rolls two 6 sided dice.")
    message.reply("!rollDnD rolls a 20-sided die.")
    message.reply("!rollDuel rolls a 20-sided die 3 times, to be used for die duels.")
  }
  if (message.content === '!critixe') {
    message.reply('<@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998>')
  }
  if (message.content === '!roll') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 6) + 1) + ' and ' + String(Math.floor(Math.random() * 6) + 1) )
  }
  if (message.content === '!rollDnD') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 20) + 1))
  }
  if (message.content === '!rollDuel') {
    roll1 = Math.floor(Math.random() * 20) + 1
    roll2 = Math.floor(Math.random() * 20) + 1
    roll3 = Math.floor(Math.random() * 20) + 1
//    roll4 = Math.floor(Math.random() * 20) + 1
//    roll5 = Math.floor(Math.random() * 20) + 1
//  If I roll 5 dice, the total somehow comes 5 to 10 seconds after the dice values.
    total = 'Your total is ' + String(roll1 + roll2 + roll3)

    message.reply('You roll ' + String(roll1))
    message.reply('You roll ' + String(roll2))
    message.reply('You roll ' + String(roll3))
//    message.reply('You roll ' + String(roll4))
//    message.reply('You roll ' + String(roll5))
        message.reply( total)
    
  }
  if (message.content === '!rollYes') {
    if (message.member.roles.some(r=>["Server Owner", "MODERATOR"].includes(r.name)) ) {
      message.reply("You roll " + String(Math.floor(Math.random() * 9001) + 1000))
    } else {
      message.reply("You roll 0")
    }
});

client.login(process.env.BOT_TOKEN);
