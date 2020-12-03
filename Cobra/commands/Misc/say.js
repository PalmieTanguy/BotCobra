const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
  
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
  .setTitle("🗣️")
  .setDescription(args.join(""));
};

module.exports.help = MESSAGES.COMMANDS.MISC.SAY;