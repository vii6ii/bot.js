const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("🙄 - Please Check My Permission")
  

message.guild.fetchBans().then(bans =>  {
let banssize = new Discord.MessageEmbed()
.addField("**Bans Count**","**"+bans.size+"**")
message.channel.send(banssize).catch(error => {
console.log(error);
})})}

module.exports.help={name:"bans"}