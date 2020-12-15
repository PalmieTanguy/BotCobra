//Croux
const { MessageEmbed } = require("discord.js");
const color = "GREEN";

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Un utilisateur a rejoins !");
    
    client.channels.cache.find(channel => channel.name === '✅┃welcome-bot').send(embed);
};