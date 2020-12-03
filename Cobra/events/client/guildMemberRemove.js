const { MessageEmbed } = require('discord.js')

module.exports = (client, member) => {

  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id}))`, member.user.displayAvatarURL())
    .setColor("RED")
    .setFooter("Un utilisateur a quitté.")
    .setTimestamp();

  guild.channels.cache.find(channel => channel.name === '❌┃goodbay-bot').send(embed);

}