const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check My Permission")
  
try{
let user = message.content.split(" ").slice(1).join(" ")
if(!user) return message.channel.send("**:face_with_monocle: - I can't find this member id**")
if(isNaN(user)) return message.channel.send("**Theres not a ID**")
if(user < 18) return message.channel.send("**Its a not available id**")
message.guild.members.unban(user)
message.channel.send("**:white_check_mark: Done UnBanned This User From This Server !**")
}catch(error){
  message.channel.send("**This member has not have ban from this server !**")
console.log(error)
}
  
}
module.exports.help={name:"unban"}