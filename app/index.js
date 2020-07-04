const Discord = require("discord.js")
const bot = new Discord.Client()
const prefix = "#"
const ms = require("ms")
const fs = require("fs")
bot.on("ready", () => {bot.user.setActivity("هلو",{type:"PLAYING"});console.log("Done loggined to "+bot.user.tag+" !")})

const client = bot
client.commands = new Discord.Collection();client.queue = new Map();client.aliases = new Discord.Collection()
var Jimp = require("jimp");const { readdirSync } = require("fs");const { join } = require("path");var Jimp = require("jimp");
client.commands = new Discord.Collection();console.log(`logging in`);fs.readdir("./commands/", (err, files) => {
if (err) console.log(err);let jsfile = files.filter(f => f.split(".").pop() === "js");if(jsfile.length <= 0) {console.log("Couldn't find commands.");return;}
jsfile.forEach((f, i) => {let props = require(`./commands/${f}`);/*console.log(`[ ${f} ] Loadded ! ✅  `)*/;client.commands.set(props.help.name, props);});});
client.on("message", async (message) => {if(message.author.bot) return;if (!message.guild) return;
if(message.content.startsWith(prefix)) {const args = message.content.slice(prefix.length).trim().split(/ +/);const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
if(!command) return;try {command.run(bot, message, args);} catch (error) {console.error(error);}}})




bot.on("message", message => {
if(message.content.startsWith(prefix + "ping")){
let ping = bot.ws.ping
let embed = new Discord.MessageEmbed()
.setDescription(`Discord Ping ${ping}`)
return message.channel.send(embed)
}})



bot.login("توكن بوت")