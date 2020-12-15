//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  var mentionned = message.mentions.users.first();
	let guildAvatar = client.guilds.cache.get(args[1]);

  if (mentionned) {
    var autheur = mentionned;
  } else {
    var autheur = message.author;
  }

  //image = image.replace("webp","png");
  	if (guildAvatar) {
			let icon = guildAvatar.iconURL({format: 'png', dynamic: 'true', size: 2048});
		}

		let image = autheur.displayAvatarURL({format: 'png', dynamic: 'true', size: 2048});

  var embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setImage(image)
		.setThumbnail(icon)
    .setDescription(`Requête de ${message.author}`)
    .setColor("GREEN");

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.AVATAR;