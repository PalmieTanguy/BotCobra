//XDemon
const { MessageEmbed } = require('discord.js')
const color = "RED";

module.exports = async (client, role) => {
  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_UPDATE'
  });
  try{
  const latestRoleUpdated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleUpdated;
  let roleOld = role.name;
  let roleUpdatePrint = role.name;
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(executor.username, executor.displayAvatarURL())
    .setDescription(`**Action**: modification de rôle\n**Role ancien**: ${roleOld}\n**Rôle changé**: ${roleUpdatePrint}\n**Auteur du rpole**: ${role.author}`)
    .setFooter("By XDemon🌴", "https://cdn.discordapp.com/avatars/303971342703919104/9d162f60230e519a138d63a8b7d1fdac.png?size=4096")
    .setTimestamp();
  console.log("Rôle modifié: ["+roleOld+"] en ["+roleUpdatePrint+"] dans le discord :",role.guild.name);

    client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
  }catch(e){
    console.log(e);
  }
};