const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
let emojis = message.guild.emojis.cache.map(emojis => `[ Emoji: ${emojis} ID: \`${emojis.id}\`\nURL: \`${emojis.url}\` ] `).join("\n\n")
let embed = new Discord.MessageEmbed()
.setTitle("**Server emojis "+message.guild.emojis.cache.size+"**")
.setDescription(""+emojis+"")
.setTimestamp()
return message.channel.send(embed)
}
module.exports.help={name:"emojis"}