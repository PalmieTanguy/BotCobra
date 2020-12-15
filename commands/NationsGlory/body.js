//Kolowy
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

    const embed = new MessageEmbed()
      .setTitle(`${args[0]}'s body `, message.guild.iconURL)
      .setImage('https://skins.nationsglory.fr/body/'+ args[0])  
      .setColor("#0474dc")
      .setDescription(`Si l'image n'apparait pas, reverifiez le pseudo que vous avez entré`)
      .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
      .setTimestamp();

    message.channel.send(embed)

    message.delete()

};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.BODY;