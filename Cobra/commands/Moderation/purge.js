const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  MANAGE_MESSAGES
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Vous devez avoir la permission** `MANAGE_MESSAGES` **pour exécuter cette commande !**");

  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un **nombre** entre \`1\` et \`100\` !');

  const messages = await message.channel.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  })

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
	  .setColor("PINK")
	  .setAuthor(message.author.username, message.author.avatarURL())
	  .setDescription(`**Action** : PURGE\**Nbr de messages** : ${args[0]}\**Salon** : ${message.channel}`)
	  //.setThumbnail(imageclear)

  guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};
module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;