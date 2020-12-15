//Croux + XDemon
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const PREFIX = process.env.PREFIX;
let categoryList = readdirSync('./commands');
const categoryHelp = require('../../util/categoryHelp.json');
const ownerId = process.env.OWNERID.split(",");
const color = "RANDOM";

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  if (!args.length) {
    let listCat=[];
    if(categoryList.length==Object.keys(categoryHelp).length ){
      listCat = Object.values(categoryHelp);
    }
    else {
      listCat = categoryList;
      console.log("Help : Json à mettre à jour")
    }
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .addField('Liste des commandes', `Une liste de toutes les sous-catégories disponibles et leurs commandes\nPour plus d\'informations, tapez \`${PREFIX}help <commande_name>\``)
    .setTimestamp()
    .setFooter("Page d'aide", "https://images.emojiterra.com/google/android-11/128px/2753.png");

  for (var i= 0; i < categoryList.length; i++)
    embed.addField(
      `${listCat[i]}`,
      `${client.commands.filter(cat => cat.help.category === categoryList[i].toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
	);
 
    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

  if (!command) return message.reply("Cette commande n'existe pas !")

    const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle(`\`${command.help.name}\``)
    .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
    .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name} `, true)
    .setTimestamp()
    .setFooter("Page d'aide", "https://images.emojiterra.com/google/android-11/128px/2753.png");

  if (command.help.aliases.length > 0) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);

  return message.channel.send(embed)
 }

  message.delete()
  
};

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;