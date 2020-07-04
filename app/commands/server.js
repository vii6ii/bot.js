const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
const moment = require("moment")
module.exports.run = async (bot, message) => { 

let server = new Discord.MessageEmbed()
.setFooter(message.author.username,message.author.displayAvatarURL())
.setTimestamp()
.addField("Owner:","<@"+message.guild.owner+"> (ID:"+message.guild.owner.id+")",false)
.addField("Create Date:",""+moment(message.guild.createdTimestamp).format("YYYY/M/D HH:mm:ss")+" ",true)
.addField("Channels:"," `# "+message.guild.channels.cache.filter(m => m.type === 'text').size+"` `🔊 "+message.guild.channels.cache.filter(m => m.type === 'voice').size+"`",true)
.addField("Members",` ${message.guild.members.cache.size}/${message.guild.members.cache.filter(m => m.presence.status !== "offline").size} Online `,true)
.addField("AfkChannel",`AfkChannel: ${message.guild.afkChannel || "Empty"}\nAfkTime: ${message.guild.afkTimeout} `,true)
.addField("Region",`${message.guild.region}`,true)
.addField("Verification",`${message.guild.verificationLevel}`,true)
.addField("SystemChannel",`SystemChannel: ${message.guild.systemChannel || "Empty"}`,true)
.addField("More",`Roles: ${message.guild.roles.cache.size}\nEmojis: ${message.guild.emojis.cache.size} `,true)
.addField("Premium",`Boosts: ${message.guild.premiumSubscriptionCount}/3`,true)
message.channel.send(server)}

module.exports.help = {name:"server"}  