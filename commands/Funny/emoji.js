const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  if (!args[0]) return message.reply("S'il te plaît, donne moi le nom de l'emoji");

  const embed = new MessageEmbed()
    .setTitle(`${args[0]}'s body `, message.guild.iconURL)
    .setAuthor(message.author.tag)
    .setColor('#58D3F7')
    .setFooter("By XDemon", 'https://skins.nationsglory.fr/face/XDemonBloodX/3d/15')
    .setTimestamp();    
  message.channel.send(embed)

      message.delete()
      
};

module.exports.help = MESSAGES.COMMANDS.FUNNY.EMOJI;