const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("**Please Check My Permissions !**")

let args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.channel.send("**Please Type a Color Number !**")
if(isNaN(args)) return message.channel.send("**There is not a color !**")
let color_role = message.guild.roles.cache.find(role => role.name === `${args}`)
if(!color_role) return message.channel.send("**I can't find this color**")
message.guild.member(message.author).roles.add(color_role)
let embed = new Discord.MessageEmbed()
.setTitle("**Done**")
.addField("**Number:**",`${args}`,true)
.addField("**hexColor:**",`${color_role.hexColor}`,true)
.setFooter("Requested By " + message.author.username , message.author.avatarURL())
.setColor(color_role.hexColor)
return message.channel.send(embed)
}

module.exports.help={name:"color"}