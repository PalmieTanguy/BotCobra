//Croux
const { MESSAGES } = require('../../util/constants.js')
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const color = "RANDOM";

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  let member = message.member;
  if (args[0]) member = message.guild.member(message.mentions.users.first());
  let user = member.user;

  const embed = new MessageEmbed()
    .setColor(color)
    .setThumbnail(user.displayAvatarURL())
    .addField(`Pour plus d'informatio ns à propos de **${user.username}**`,
      `• Nom : ${user.tag}
• Bot : ${user.bot ? 'true' : 'false'}
• Créé le : ${moment(user.createAt).format('DD/MM/YYYY | hh:mm')}
• Statut : ${user.presence.status.toUpperCase()}`
    );

  message.channel.send(embed);
  message.channel.send(`L'utilisateur **${user.username}** ${member.nickname === undefined ? '' : `aka **${member.nickname}**`} a rejoint le s${moment(member.joinedAt).format('DD/MM/YYYY | hh:mm')} et possède les rôles suivants : ${member.roles.cache.map(roles => `\`${roles.name}\``).join(', ')}`);

};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.INFOUSER