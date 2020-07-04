const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {

  
  
let embed = new Discord.MessageEmbed()
.setTitle("**Commands List**")
.addField("**:yarn: Generals Commands**","`"+prefix+"roles` `"+prefix+"emojis` `"+prefix+"color` `"+prefix+"server` `"+prefix+"user` ")
.addField("**:axe: Admins Commands**"," `"+prefix+"role` `"+prefix+"clear` `"+prefix+"ban` `"+prefix+"kick` `"+prefix+"slowmode` `"+prefix+"mute` `"+prefix+"unmute` `"+prefix+"ccolors`")
.addField("**:spider_web: Tickets Commands**","`"+prefix+"new` `"+prefix+"close` `"+prefix+"rename`")
.addField("**:tada: Giveaways Commands**","`"+prefix+"gcreate` ")
.setTimestamp()
message.channel.send({embed: embed})

}
module.exports.help={name:"help"}