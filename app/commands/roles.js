const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
let roles = message.guild.roles.cache.map(roles => " ```"+roles.name+"```").join("\n")
let embed = new Discord.MessageEmbed()
.setTitle("**Server roles "+message.guild.roles.cache.size+"**")
.setDescription("**"+roles+"**")
.setTimestamp()
return message.channel.send(embed)
}
module.exports.help={name:"roles"}