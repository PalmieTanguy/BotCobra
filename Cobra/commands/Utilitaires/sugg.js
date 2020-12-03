const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
        
  var argument = ``
  var x = args.length
  for(let i = 0; i < x; i++) {
    argument = `${argument} ${args[i]} `
  }

  const suggestion = new MessageEmbed()
   .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
  .setTitle(`:bulb: ${message.author.username}'S SUGGESTION`)
  .setDescription(`${argument}`)  
  .setColor("GREEN")
  .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
  .setTimestamp();
  message.channel.send(suggestion).then(function (message) {
        message.react("✅")
        message.react("➖")
        message.react("❌")
  });
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.SUGG;