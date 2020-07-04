const Discord = require("discord.js");
const bot = new Discord.Client()
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(":face_with_monocle: - Please Check My Permission")

  

let args = message.content.split(" ")
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
if(!user) return message.channel.send("**:face_with_monocle: - I can't find this member**");
let mute_role = message.guild.roles.cache.find(role => role.name === "Muted")
if(!mute_role) return;
message.guild.member(user).roles.remove(mute_role)
message.channel.send("**:white_check_mark: Done "+user.username+" have been unmuted !**")
  
}
module.exports.help = {name:"unmute"}