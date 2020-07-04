const Discord = require("discord.js");
const bot = new Discord.Client()
const prefix = "#"
module.exports.run = async (bot, message) => {
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(":face_with_monocle: - Please Check Your Permission")
if(!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(":face_with_monocle: - Please Check My Permission")

let args = message.content.split(" ");
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
if (!user) return message.channel.send(":face_with_monocle: - I can't find this user.");
if (!role) return message.channel.send(":face_with_monocle: - I can't find this role.");
if (!role1) return message.channel.send(":face_with_monocle: - I can't find this role.");
if (user.roles.cache.find(c => c.id === role1.id))
return message.guild.member(user).roles.remove(role1).then(() => {
message.channel.send(`**:white_check_mark: Removed role for ${user.user.username} role ${role1.name}**`);
}).catch(err => console.log(err));
message.guild.member(user).roles.add(role1).then(() => {
message.channel.send(`**:white_check_mark: Added role for ${user.user.username} role ${role1.name}**`);
}).catch(err => console.log(err));
}

module.exports.help={name:"role"}
