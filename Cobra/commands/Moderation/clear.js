const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant delete messages!");

  if (!args[0]) return message.channel.send("Veuillez preciser le nombre de message(s) à supprimer `all/nombre`")

  if (args[0] == "all") {
    message.channel.fetchMessages()
      .then(function (list) {
        message.channel.bulkDelete(list);

        const embed = new MessageEmbed()
          .setTitle("Clear:", message.guild.iconURL)
          .setDescription(" ")
          .setColor("RANDOM")
          .addField(`tout les messages ont étés supprimés`, `par ${message.author}`)
          .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
        .setTimestamp();
        //.addField("Reason", `${args[1]}`);

        message.channel.send(embed).then(msg => console.log(`Deleted message from ${msg.author.username} after 15 seconds`)).catch(console.error);

      }, function (err) { message.channel.send("ERREUR: Je n'arrive pas a clean le channel.") })

  } else {
    if (isNaN(args)) return message.channel.send(`Ce n'est pas un nombre ! `); 
    if (args > 100) {
      message.channel.send("100 est le maximum de messages, sinon utiliser \"all\".")

    } else {
      message.delete().catch(O_o => { });
      message.channel.bulkDelete(args[0]).then(() => {

        const embed = new MessageEmbed()
          .setTitle("Clear:", message.guild.iconURL)
          .setDescription(" ")
          .setColor("RANDOM")
          .addField(`${args[0]} messages ont étés supprimés`, `par ${message.author}`)
          .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
         .setTimestamp();

        message.channel.send(embed).then(msg => console.log(`Deleted message from ${msg.author.username} after 15 seconds`)).catch(console.error);
      })
    }
  }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;