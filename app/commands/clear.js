const Discord = require("discord.js");
const bot = new Discord.Client()
const ms = require("ms")
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":face_with_monocle: - Please Check My Permission")

  

message.channel.messages.fetch().then(messages => {
message.channel.bulkDelete(messages);
let msgs = messages.array().length;
let embed = new Discord.MessageEmbed()
.setDescription("**```js\n"+msgs+" messages deleted !```**")
message.channel.send({embed: embed}).then(m => m.delete({timeout: 2000}))})

}
module.exports.help={name:"clear"}