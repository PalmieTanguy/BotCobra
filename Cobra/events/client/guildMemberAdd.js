const { MessageEmbed } = require('discord.js')

module.exports = (client, member) => {

  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id}))`, member.user.displayAvatarURL())
    .setColor("GREEN")
    .setFooter("Un utilisateur a rejoint.")
    .setTimestamp();

  client.guild.channels.cache.find(channel => channel.name === '✅┃welcome-bot').send(embed);
}