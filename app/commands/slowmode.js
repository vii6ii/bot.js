const Discord = require("discord.js");
const bot = new Discord.Client()
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check My Permission to can edit in this channel.")


let time = message.content.split(" ").slice(1).join(" ")
if(isNaN(time)) return message.channel.send("**:face_with_monocle: - Its not a time**")
if(!time) return message.channel.send("**:face_with_monocle: - Please Type a New SlowMode**")
message.channel.setRateLimitPerUser(time);
message.channel.send("**Done Changed A SlowMode To: "+time+"**")
}
module.exports.help = {name:"slowmode"}                 