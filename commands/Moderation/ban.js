//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée !');

  user ? message.guild.member(user).ban({ days: 7, reason: reason }) : message.channel.send("L'utilisateur que vous souhaitez expulser n'existe pas !");

  const embed = new MessageEmbed()
	  .setColor("RED")
	  .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
  	.setDescription(`**Action** : BAN\n**Raison** : ${reason}`)
  	.setTimestamp()
	.setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);

    message.delete()
    
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;
