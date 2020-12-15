//Croux
const { MESSAGES } = require('../../util/constants.js')
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const color = "RANDOM";

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const guild = message.guild;

  const embed = new MessageEmbed()
    .setColor(color)
    .setThumbnail(guild.iconURL())
    .addField(`Plus d'informations à propos de : **${guild.name}**`,
      `• ID : ${guild.id}
• OWNER : ${guild.owner.user.tag} (${guild.ownerID})
• Créé le : ${moment(guild.createAt).format('DD/MM/YYYY')}
      `
    );


  message.channel.send(embed);
  message.channel.send(`Votre serveur possède ${guild.channels.cache.filter(ch => ch.type === "text").size} salons textuels et ${guild.channels.cache.filter(ch => ch.type === "voice").size} salons vocaux avec ${guild.memberCount -1} membres.`);

};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.INFOSERV