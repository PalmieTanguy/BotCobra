//const { MESSAGES } = require("../../util/constants");
const { version } = require("discord.js"); 
const request = require('request');
const mcPort = 25565; //10006;
const color = "YELLOW"

module.exports.run = async (bot, message, args) => {
  let arg = message.content.split(" ").slice(1);
  let echo = arg.join(" ")
  if (arg.length > 0) {
    message.delete().catch(O_o => { });
    var url = 'http://mcapi.us/server/status?ip=' + echo + '&port=' + mcPort;
    request(url, function (err, response, body) {
      if (err) {
        let reportEmbed = new Discord.MessageEmbed()
        .setTitle("Error", message.guild.iconURL)
        .setDescription(" ")
        .setColor("#ff0000")
        .addField("Reason:", "Le serveur n'existe pas")
        .setTimestamp()
        return message.channel.send(reportEmbed);
      }
    message.channel.send(body);
      body = JSON.parse(body);
      if(body.status == false){
        let reportEmbed = new Discord.MessageEmbed()
        .setTitle("Error", message.guild.iconURL)
        .setDescription(" ")
        .setColor("#ff0000")
        .addField("Reason:", "Le serveur n'existe pas")
        .setFooter("Minecraft",  "https://images.emojiterra.com/google/android-11/128px/1f50c.png")
        .setTimestamp();
        return message.channel.send(reportEmbed);
      }
      var status = `Le serveur : ${echo} est actuallement offline`;
      if (body.online) {
        status = `Le serveur : ${echo} est actuallement online`;
        if (body.players.now) {
          status += '\nLe nombre de personnes connecté est de :' + body.players.now;
        } else {
          status += 'nothing play...';
        }
      }
      message.channel.send(status);
    });
  }
}

//module.exports.help = MESSAGES.COMMANDS.CONNECTIONS.MC;

module.exports.help = {
  name: "minecraft",
  aliases: ["mc",],
  category: ":link: ≫ Connections",
  description: "Renvoit le statut d'un serv mc.",
  cooldown: 0,
  usage: "<server_name>",
  isUserAdmin: false,
  permissions: false,
  args: false,
};