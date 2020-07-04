const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check My Permission")
let args = message.content.split(" ");
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
if (!message.member.voice.channel)
return message.channel.send("**:face_with_monocle: - Your are not in voice channel**");
if (!user) return message.channel.send("**:face_with_monocle: - I can't find this user**");
if (!message.guild.member(user.id).voice.channel)
return message.channel.send(`**${user.user.username}** This member is not in voice channel !`);
message.guild.member(user.id).voice.setChannel(message.member.voice.channel.id).then(() => {
message.channel.send(`**Done Move ${user.user.username} to ${message.guild.member(message.author).voice.channel.name}**`)
});
 
}
module.exports.help = {name:"move"}  