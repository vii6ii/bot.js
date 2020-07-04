const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {

  
  
let help = new Discord.MessageEmbed()
.setTitle("Giveaway Command")
.setDescription("**Giveaway**")
.addField("**Usage**",`${prefix}gcreate [Time] [Prize]`)
.addField("**Example**",`${prefix}gcreate 1m Nitro`)
.setColor("none")
.setTimestamp()
let giveawaytimer = message.content.split(" ")[1]
if(!giveawaytimer) return message.channel.send(help)
let prize = message.content.split(" ")[2]
if(!prize) return message.channel.send(help)
if(message.content < 1)return message.channel.send(help)
let create = new Discord.MessageEmbed()
.setTitle("**"+prize+"**")
.setDescription(`
React with :tada: to enter!
Time remaining: ${giveawaytimer} 
Hosted By: ${message.author}`)
.setColor("#0091fc")
.setTimestamp()
message.channel.send(create).then(gw_msg => {
gw_msg.react("🎉") 
function reactions(gw_msg){gw_msg.reactions.cache.size}
setTimeout(() => {
let winners = gw_msg.reactions.cache.get("🎉").users.cache.filter(user => !user.bot).random()
message.channel.send("> Congratulations <@"+winners+"> Your win a **"+prize+"**\n "+gw_msg.url+"")
let embed = new Discord.MessageEmbed()
.setDescription("**The Winner is: @"+winners.username+"\nThe Prize is: "+prize+"**")
.setColor("#ec0909")
.setTimestamp()
gw_msg.edit(embed)
}, ms(giveawaytimer))})

}
module.exports.help={name:"gcreate"}
