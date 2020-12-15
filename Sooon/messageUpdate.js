//XDemon
const { MessageEmbed } = require('discord.js')
const color = "RED";

module.exports = async (client, message) => {

  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_UPDATE'
  });
  
  const latestChannelUpdated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelUpdated;
  //console.log(latestChannelUpdated)
  let messageOld = message.content.substring(0,50);
  let messageUpdatePrint = message.reactions.message.content.substring(0,50);

  
  let change= latestChannelUpdated;
  if(change == null){return}
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: modification de message\n**Message ancien**: ${messageOld}\n**Message changé**: ${messageUpdatePrint}\n**Auteur du message**: ${message.author}`)
    .setFooter("By XDemon🌴", "https://cdn.discordapp.com/avatars/303971342703919104/9d162f60230e519a138d63a8b7d1fdac.png?size=4096")
    .setTimestamp();
  console.log("Message modifié: ["+messageOld+"] en ["+messageUpdatePrint+"]dans le discord :",message.guild.name);

  //message.guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};