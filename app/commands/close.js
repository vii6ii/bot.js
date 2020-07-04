const Discord = require("discord.js");
const bot = new Discord.Client()
let current = 0;
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check My Permission")

if(!message.channel.name.startsWith("ticket-"))
return message.channel.send("**:face_with_monocle: - Theres not a ticket channel !**")
message.channel.send("**This Channel Will Be Auto-Deleted in 5 secounds !**")
setTimeout(async() => {
message.channel.delete()
}, 5000)
}
module.exports.help={name:"close"}