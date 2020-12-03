const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée !');

  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur que vous souhaitez expulser n'existe pas !");

  const embed = new MessageEmbed()
	  .setColor("BLUE")
	  .setAuthor(`${user.username} (${user.id})`)
	  .setDescription(`**Action** : KICK\n**Raison** : ${reason}`)
	  .setThumbnail(user.avatarURL())
	  .setTimestamp()
	  .setFooter(message.author.username, message.author.avatarURL());

  guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;