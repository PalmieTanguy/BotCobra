//Croux
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let Rmember =
    message.mentions.members.first() ||
    message.guild.members.cache.find((m) => m.user.tag === args[0]) ||
    message.guild.members;
  let role =
    message.guild.roles.cache.find((r) => r.name == args[1]) ||
    message.guild.roles.cache.find((r) => r.id == args[1]) ||
    message.mentions.roles.first();


  if (role) {
    if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle !")

    Rmember.roles.add(role.id)
    .then(m => message.channel.send (`${Rmember}, le rôle [ ${role} ] vous a été ajouté !`))
    .catch(e => console.log(e));
  } else {
    message.channel.send("Le rôle n'existe pas !")
  }

  message.delete()
  
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.ADDROLE;