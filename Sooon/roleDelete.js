//Croux
const { MessageEmbed } = require('discord.js')
const color = "GREEN";

module.exports = async (client, role) => {

  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_DELETE'
  });

  const latestRoleDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleDeleted;
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: suppression de rôle\n**Rôle supprimé**: ${role.name}`)
    .setFooter("By XDemon🌴", "https://cdn.discordapp.com/avatars/303971342703919104/9d162f60230e519a138d63a8b7d1fdac.png?size=4096")
    .setTimestamp();
  console.log("Rôle supprimé: ["+role.name+"] dans le discord :",role.guild.name);

    client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};
