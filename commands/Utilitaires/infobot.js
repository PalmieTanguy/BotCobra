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
    .setAuthor(` ${client.user.username} Info`, client.user.avatarURL())
    .addField('Mémoire', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField('Uptime', `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, true)
    .addField('\u200b', '\u200b', true)
    .addField('Serveurs', `${client.guilds.cache.size.toString()}`, true)
    .addField('Salons', `${client.channels.cache.size.toString()}`, true)
    .addField('Utilisateurs', `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
    .addField('Version', `discord.js@12.2.0`, true)
    .addField('Source', '[GitHub](https:/github.com/Croux/Cobra)', true)
    .addField('Support', '[Server invit](https://discord.gg/qXfBu5ugqz)', true);

  message.channel.send(embed);
  message.channel.send(`Votre serveur possède ${guild.channels.cache.filter(ch => ch.type === "text").size} salons textuels et ${guild.channels.cache.filter(ch => ch.type === "voice").size} salons vocaux avec ${guild.memberCount -1} membres.`);

};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.INFOBOT