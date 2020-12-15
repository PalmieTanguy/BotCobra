const { MESSAGES } = require("../../util/constants");
const { RichEmbed } = require("discord.js");
const { MessageEmbed} = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const subReddits = ["dankmeme", "meme", "me_irl"];

  const random = subReddits[Math.floor(Math.random() * subReddits.length)];

  const img = await randomPuppy(random);

  const embed = new MessageEmbed()
    .setColor("Random")
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)
    .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
    .setTimestamp();

  message.channel.send(embed);

  message.delete()
  
}

module.exports.help = MESSAGES.COMMANDS.FUNNY.MEME