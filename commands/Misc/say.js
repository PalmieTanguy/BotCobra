//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const color = "RANDOM";

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(`${message.author.username} 🗣`, message.author.avatarURL(), message.author.avatarURL())
    .setDescription(args.join(" "));

  message.channel.send(embed);

  message.delete()
  
};

module.exports.help = MESSAGES.COMMANDS.MISC.SAY;