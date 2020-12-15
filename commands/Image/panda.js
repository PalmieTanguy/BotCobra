//Croux
const { MESSAGES } = require("../..//util/constants.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const color = "PURPLE";

module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const cat = await fetch("https://some-random-api.ml/facts/panda")
    .then(res => res.json())
    .then(json => json.file);

    const embed = new MessageEmbed()
      .setColor(color)
      .setImage(cat)
      .setTimestamp()
      .setFooter("Extract to http://aws.random.cat/meow");

  message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.IMAGE.PANDA;