//Croux
const { MessageEmbed } = require('discord.js')
const color = "GREEN";

module.exports = async (client, role) => {

  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_CREATE'
  });

  const latestRoleCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleCreated;

  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: création de rôle\n**Rôle crée**: ${role.name}`)
    .setFooter("By XDemon🌴", "https://cdn.discordapp.com/avatars/303971342703919104/9d162f60230e519a138d63a8b7d1fdac?size=4096")
    .setTimestamp();
  console.log("Rôle créé: ["+role.name+"] dans le discord :",role.guild.name);

    client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
};
