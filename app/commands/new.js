const Discord = require("discord.js");
const bot = new Discord.Client()
let current = 0;
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(":face_with_monocle: - Please Check My Permission")



let Ticket_Support = message.guild.roles.cache.find(role => role.name === "Ticket Support")
if(!Ticket_Support) return message.channel.send("**:face_with_monocle: - I can't find `Ticket Support` role**")
let everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
var numbers = [1, 2, 3, 4];
current++;
message.guild.channels.create(`ticket-${current}`, {type: "text"}).then(ticket => {
ticket.createOverwrite(Ticket_Support, {SEND_MESSAGES: true})
ticket.createOverwrite(everyone, {SEND_MESSAGES: false,VIEW_CHANNEL: false})
ticket.createOverwrite(message.author, {SEND_MESSAGES: true})
let author = new Discord.MessageEmbed()
.setTitle("**Done Created The Ticket !**")
.setDescription("**Your Ticket is: <#"+ticket.id+"> GoodLuck!**")
.setTimestamp()
message.author.send({embed: author})
let open = new Discord.MessageEmbed()  
.setDescription(`**${message.author}` + " Has Been Created a Ticket**")
.addField("**information:**","```Username: "+message.author.username+"\nID: "+message.author.id+"```")
.setTimestamp()
ticket.send({embed: open})})
  
}
module.exports.help={name:"new"}