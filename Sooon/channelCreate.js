//Croux
const { MessageEmbed } = require('discord.js')
const color = "GREEN";
const moment = require('moment');


module.exports = async (client, channel) => {

  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_CREATE'
  });

  const latestChannelCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelCreated;
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: création de salon\n**Nouveau channel**: ${channel.name}`)
    .setFooter("By Croux", "https://cdn.discordapp.com/avatars/506118119216119810/f990d0eb701d3be408b37050eac2ead1.png?size=4096")
    .setTimestamp();
  console.log("Channel créé: ["+channel.name+"] dans le discord :",channel.guild.name);

    client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};
