//Croux
const { MessageEmbed } = require("discord.js");
const color = "RED";

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Un utilisateur a quitté !");
    
    client.channels.cache.find(channel => channel.name === '❌┃goodbay-bot').send(embed);
};