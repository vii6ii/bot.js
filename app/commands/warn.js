const Discord = require("discord.js");
const bot = new Discord.Client()
const fs = require("fs")
const warn = JSON.parse(fs.readFileSync("./warn.json"))
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
let user = message.mentions.users.first()
if(!user) return message.channel.send("**:face_with_monocle: - I can't find this member**")
let reason = message.content.split(" ").slice(2).join(" ")
if(!reason) return message.channel.send("**:face_with_monocle: - Please Type a Specfic Reason**")
if (!warn[user.id])
warn[user.id] = {warn: 0};
warn[user.id].warn++;
message.channel.send("** "+user.username+" has been warned reason `"+reason+"` **")
fs.writeFile("./warn.json", JSON.stringify(warn), err => {
if (err) console.log(err)})  
  
}
module.exports.help={name:"warn"}