//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let user = await client.users.fetch(args[0]);
  if (!user) return message.reply("L`'utilisateur n'existe pas !");
  message.guild.members.unban(user)

  const embed = new MessageEmbed()
  	.setColor("GREEN")
	  .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
	  .setDescription(`**Action** : UNBAN`)
	  //.setThumbnail(imageunban)
	  .setTimestamp()
  	.setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);

      message.delete()

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;