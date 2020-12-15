//XDemon
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message) => {
        
  message.delete({ timeout: 1000 }).catch(console.error);

  //["XDemon🌴", "Croux🍹","Kolowy👾" ]
  console.log(client.user)
  const teamEmbed = new MessageEmbed()
   .setAuthor(client.user.username, client.user.avatarURL(), client.user.avatarURL())
  .setTitle(`:snake: I present to you the team :`)
  .setColor("DARK_GOLD")
  .addField("Kolowy👾", "He is not ready for code pools")
  .addField("Croux🍹", "He breaks the cmd")
  .addField("XDemon🌴", "He loves hamsters")
  .addField("Dunkran 👽", "Nobody know what he did")
  .setFooter("By ＣＨＩＬＬ ➽ 🌞")
  .setTimestamp();
  message.channel.send(teamEmbed);
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.TEAM;

