const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

  const embed = new MessageEmbed()
     .setAuthor(message.author, message.author.avatarURL, message.author.avatarUR)
     .setTitle(`${args[0]}'s head `, message.guild.iconURL)
   	 .setImage(`https://skins.nationsglory.fr/face/${args[0]}`)  
  	 .setColor("#0474dc")
     .setDescription(`Si l'image n'apparait pas, reverifiez le pseudo que vous avez entré`)
     .setFooter("Extract to NG Blue ©", "https://cdn.discordapp.com/attachments/707987149013778484/781226919953825854/Blue2.jpg");

  message.channel.send(embed)

};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.FACE2D;