const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check My Permission")

  

let user = message.mentions.users.first()
if(!user) return message.channel.send("**:face_with_monocle: - I can't find this member**")
if(user.id == message.author.id)
return message.channel.send("**:face_with_monocle: - Your can't kicked your self**")
if(user.id == bot.user.id)
return message.channel.send("**:face_with_monocle: - Your can't kicked myself**")
if(!message.guild.member(user).kickable)
return message.channel.send("**:face_with_monocle: - I can't kicked this member**")
let reason = message.content.split(" ").slice(2).join(" ")
if(!reason) return message.channel.send("**:face_with_monocle: - Please Type a Specific Reason**")
message.guild.member(user).kick({reason: reason})  
message.channel.send("**:white_check_mark: Done Kicked This User From This Server !**")

  
}
module.exports.help = {name: "kick"}