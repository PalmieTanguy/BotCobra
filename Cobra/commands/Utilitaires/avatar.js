const { MESSAGES } = require("../../util/constants");
const { MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

  var mentionned = message.mentions.users.first();
  if (mentionned) {
    var autheur = mentionned;
  } else {
    var autheur = message.author;
  }
  let image = autheur.displayAvatarURL();
  image = image.replace("webp", "png");
  
  var embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setImage(image + "?size=2048")
    .setDescription(`Requête de ${message.author}`)
    .setColor("GREEN");

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.AVATAR;