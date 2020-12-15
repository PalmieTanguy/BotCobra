//Kolowy
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed} = require("discord.js");
const request = require('request');
const mcPort = 25565;
const color = "YELLOW"

module.exports.run = async (bot, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  let arg = message.content.split(" ").slice(1);
  let echo = arg.join(" ")
  if (arg.length > 0) {
    message.delete().catch(O_o => {
    });
    var url = 'http://mcapi.us/server/status?ip=' + echo + '&port=' + mcPort;
    request(url, function (err, response, body) {
      if (err) {
        const reportEmbed = new MessageEmbed()
          .setTitle("Error", message.guild.iconURL)
          .setDescription(" ")
          .setColor(color)
          .addField("Reason:", "Le serveur n'existe pas")
          .setTimestamp()
        return message.channel.send(reportEmbed);
      }
      body = JSON.parse(body);
      if(body.online == false){
        const errorEmbed = new MessageEmbed()
          .setTitle("Error", message.guild.iconURL)
          .setDescription(" ")
          .setColor(color)
          .addField("Reason:", "Le serveur n'existe pas, reverifiez votre ip...")
          .setFooter("Minecraft",  "https://images.emojiterra.com/google/android-11/128px/1f50c.png")
          .setTimestamp();
        return message.channel.send(errorEmbed);
      } else {
        if (body.online) {
          const errorEmbed = new MessageEmbed()
            .setTitle("Error", message.guild.iconURL)
            .setDescription(`Le serveur : **${echo}** est actuallement **online**.
            Le nombre de personnes connecté est de : **${body.players.now}**`)
            .setColor("GREEN")
            .setFooter("Minecraft",  "https://images.emojiterra.com/google/android-11/128px/1f50c.png")
            .setTimestamp();
          return message.channel.send(errorEmbed);
        } else {
          const errorEmbed = new MessageEmbed()
            .setTitle("Error", message.guild.iconURL)
            .setDescription(`Le serveur : **${echo}** est actuallement **offline**.`)
            .setColor(color)
            .setFooter("Minecraft",  "https://images.emojiterra.com/google/android-11/128px/1f50c.png")
            .setTimestamp();
          return message.channel.send(errorEmbed);
        }
      }
    });
  }
  message.delete()
}

module.exports.help = MESSAGES.COMMANDS.CONNECTIONS.MC;