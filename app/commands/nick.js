const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(":face_with_monocle: - Please Check My Permission")
    
let user = message.mentions.users.first();
if (!user) return message.channel.send(":face_with_monocle: - **I can't find this member**");
let args = message.content.split(" ").slice(2).join(" ");
if (!args) message.guild.member(user).setNickname("").then(m => {message.channel.send("**has been reseted nickname for "+user.username+"**");
}).catch(error => {message.channel.send("**:face_with_monocle: - I can't nickname this user please check my permission! **");});
message.guild.member(user).setNickname(args).then(m => {
let embed = new Discord.MessageEmbed()
.setTitle("Nicknamed User!")
.setDescription("User: ```" +user.username +"```\nNickname: ```"+args+"``` ")
.setTimestamp()
message.channel.send(embed);
}).catch(error => {message.channel.send("**:face_with_monocle: - I can't nickname this user please check my permission! **");});
}

module.exports.help = {name:"nick"}  