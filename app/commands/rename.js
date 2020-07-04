const Discord = require("discord.js");
const bot = new Discord.Client()
let current = 0;
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check My Permission")
try{
if(!message.channel.name.startsWith("ticket-"))
return message.channel.send("**:face_with_monocle: - Theres not a ticket channel !**")
let args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.channel.send("**:face_with_monocle: - Please Type a New Name For This Ticket !**")
message.channel.setName(`ticket-${args}`)
return message.channel.send("**Done Changed To ```ticket-"+args+"```**")
}catch(err){console.log(err)}
  
}
module.exports.help={name:"rename"}