const { MessageEmbed } = require('discord.js')

module.exports = async (client, channel) => {

  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_CREATE'
  });

  const latestChannelCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelCreated;

  const embed = new MessageEmbed()
    .setAuthor("Création d'un nouveau salon")
    .setColor("GREEN")
    .setDescription(`**Action**: création de salon\n**Salon créé**:${channel.name}`)
    .setFooter(executor.username, executor.displayAvatarURL());

  guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};
