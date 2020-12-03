//const { MESSAGES } = require("../../util/constants");
const { MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

  const embed = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor(client.user.username)
    .setTitle("__Pour ajouter le bot à votre serveur__ :")
    .setDescription("https://discord.com/oauth2/authorize?client_id=752812712165376083&permissions=8&scope=bot")
    .setFooter("Invit", "https://images.emojiterra.com/google/android-11/128px/2795.png")
    .setTimestamp();

  message.channel.send(embed);

};

//module.exports.help = MESSAGES.COMMANDS.CONNECTIONS.INVITE;

module.exports.help = {
  name: "invitation",
  aliases: ["invit", "inviter"],
  category: ":link: ≫ Connections",
  description: "Renvoit un lien d'invit.",
  cooldown: 0,
  usage: "",
  isUserAdmin: false,
  permissions: false,
  args: false,
};