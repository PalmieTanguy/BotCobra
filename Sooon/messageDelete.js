//Croux
const { MessageEmbed } = require('discord.js')
const color = "RED";

module.exports = async (client, message) => {

  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE'
  });
  
  const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDeleted;
  messageDeleted = message.content.substring(0,50);
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: suppression de message\n**Message supprimé**: ${messageDeleted}\n**Auteur du message**: ${message.author}`)
 .setFooter("By XDemon🌴", "https://cdn.discordapp.com/avatars/303971342703919104/9d162f60230e519a138d63a8b7d1fdac.png?size=4096")
    .setTimestamp();
  console.log("Message supprimé: ["+messageDeleted+"] dans le discord :",message.guild.name);

  message.guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};