const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message) => {
try{
let args = message.content.split(" ").slice(1);
if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
return message.channel.send(":face_with_monocle: - Please Check Your Permissions");
if(!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES"))
return message.channel.send(":face_with_monocle: - Please Check My Permissions To Can Create a Roles");
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!user) return message.channel.send("**:face_with_monocle: - I can't find this member**");
if(message.author.id == user.id) return message.channel.send("**I Can't Mute This User**")
let muterole = message.guild.roles.cache.find(role => role.name === "Muted") 
if(!muterole) message.guild.roles.create({data: {name: 'Muted',color: '#000000',},reason: 'I cant find muted role ',})
message.guild.channels.cache.forEach(async (channel, id) => {
channel.createOverwrite(muterole, {SEND_MESSAGES: false})})
message.guild.member(user).roles.add(muterole.id);
message.channel.send("**:white_check_mark: Done "+user.username+" has been muted !**")
}catch(e){console.log(e.stack)}}

module.exports.help = {
  name: "mute"
}
