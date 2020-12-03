const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Vous devez avoir la permission** `ADMINISTRATOR` **pour exécuter cette commande !**");

  args.forEach(rName => {
    let role = message.guild.roles.cache.find(r => r.name === rName.toString());
    if (role) {
    if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle !")

    message.member.roles.add(role)
    .then(m => message.channel.send (`Le rôle [ ${role} ] vous a été ajouté !`))
    .catch(e => console.log(e));
  } else {
    message.channel.send("Le rôle n'existe pas !")
  } 
  })
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.ADDROLES;

