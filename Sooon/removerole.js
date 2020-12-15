//Croux
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  let role = message.guild.roles.cache.find(r => r.name === args.toString());

  if (role) {
    if (!message.member.roles.cache.has(role.id)) return message.channel.send("Vous n'avez pas ce rôle !")

    message.member.roles.remove(role)
    .then(m => message.channel.send (`Le rôle [ ${role} ] vous a été enlevé !`))
    .catch(e => console.log(e));
  } else {
    message.channel.send("Le rôle n'existe pas !")
  }

      message.delete()

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.REMOVEROLE;