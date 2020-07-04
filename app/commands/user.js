const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
const moment = require("moment")
module.exports.run = async (bot, message) => { 

let user = message.mentions.users.first() || message.author
if(!user) return message.channel.send(":face_with_monocle: - I can't find this member")
let roles = message.guild.member(user).roles.cache.map(m => "<@&"+m+">").join(" ")
    
let userinfo = new Discord.MessageEmbed()
.addField("User",`${user.username} (ID:${user.id})`,false)
.addField("Status",`${user.presence.status}`,true)
.addField("Created At",`${moment(user.createdTimestamp).format("YYYY/M/D HH:mm:ss")}`,true)
.addField("Joined At",`${moment(user.joinedAt).format("YYYY/M/D HH:mm:ss")}`,false)
.addField("Roles",`${roles}`,true)
message.channel.send(userinfo)

  
}

module.exports.help = {name:"user"}  