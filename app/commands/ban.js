const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check My Permission")
  

let user = message.mentions.users.first()
if(!user) return message.channel.send("**:face_with_monocle: - I can't find this member**")
if(user.id == message.author.id)
return message.channel.send("**:face_with_monocle: - Your can't banned your self**")
if(user.id == bot.user.id)
return message.channel.send("**:face_with_monocle: - Your can't banned myself**")
if(!message.guild.member(user).bannable)
return message.channel.send("**:face_with_monocle: - I can't banned this member**")
let reason = message.content.split(" ").slice(2).join(" ")
if(!reason) return message.channel.send("**:face_with_monocle: - Please Type a Specific Reason**")
message.guild.member(user).ban({reason: reason})  
message.channel.send("**:white_check_mark: Done Banned This User From This Server !**")

  
}
module.exports.help={name:"ban"}