const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { ytdl } = require('ytdl-core');


module.exports.run = async (client, message, args) => {
  if (message.member.voice.channel) {
    client.leaveVoiceChannel;

  } else {
    message.channel.send("vous n'etes pas dans un channel vocal") 
    return
  }

   const ping = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle('Merci de votre écoute ! 🔘')
    .setImage('https://skins.nationsglory.fr/body/'+ args[0])  
    .setColor("#0474dc")
    .setDescription("Vous avez arrété la radio de NationsGlory !")
    .setFooter("Extract to NG Radio © ", 'https://static.nationsglory.fr/N24y2366y4.png')
  message.channel.send(ping)
};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.STOP;