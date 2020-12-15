//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const color = "RANDOM";

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

   const user = message.mentions.users.firts();
   let raison = ars[1];
 
   if (!raison) return message.reply("Il faut indiquer une raison !");

  const embed = new MessageEmbed
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setThumbnail(user.displayAvatarUrl())
    .addField("Reporté", user.name, true)
    .addField("Lien du message", isFirstCharNumeric(raison.charAt(0)) ? `[Clic Me !](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : "Aucun lien précisé...", true)
    .addField("Raison", isFirstCharNumeric(raison.charAt(0)) ? args.slice(args.indexOf(args[1])).join(" ") : args.slice(args.indexOf(args[2])).join(" "))
    .setTimestamp()
    .setFooter("Report date");

  client.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);

    message.delete()
    
};

module.exports.help = MESSAGES.COMMANDS.MISC.REPORT;