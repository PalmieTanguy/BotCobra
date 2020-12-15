//Croux
const { MESSAGES } = require("../..//util/constants.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const color = "PURPLE";

module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const fox = await fetch("https://randomfox.ca/floof")
    .then(res => res.json())
    .then(json => json.image);

    const embed = new MessageEmbed()
      .setColor(color)
      .setImage(fox)
      .setTimestamp()
      .setFooter("Extract to https://randomfox.ca/floof");

  message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.IMAGE.FOX;