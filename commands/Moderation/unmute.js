//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if(!user.roles.cache.has(muteRole.id)) return message.reply('L\'utilisateur mentionnée n\'est pas muté !');
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté.`);

  const embed = new MessageEmbed()
	.setColor("GREEN")
	.setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
	.setDescription(`**Action** : UNMUTE`)
	//.setThumbnail(imagedeunmute)
	.setTimestamp()
	.setFooter(message.author.username, message.author.avatarURL());
 
  client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);

      message.delete()

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;