const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const PREFIX = process.env.PREFIX;
let categoryList = readdirSync('./commands');
const categoryHelp = require('../../categoryHelp.json');

module.exports.run = (client, message, args) => {

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
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setColor("RANDOM")
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
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setColor("#36393F")
    .setTitle(`\`${command.help.name}\``)
    .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
    .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name}${command.help.usage}` : `${PREFIX}${command.help.name} `, true)
    .setTimestamp()
    .setFooter("Page d'aide", "https://images.emojiterra.com/google/android-11/128px/2753.png");

  if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.name.aliases.join(', ')}`, true);

  return message.channel.send(embed)
 }

};

module.exports.help = {
  name: "help",
  aliases: ["aide"],
  category: ":balloon: ≫ Funny",
  description: "Réponds à une question.",
  cooldown: 0,
  usage: "<question ?>",
  isUserAdmin: false,
  permissions: false,
  args: false,
};