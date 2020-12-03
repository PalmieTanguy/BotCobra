//const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, RichEmbed } = require('discord.js');

function getMember(message, toFind = '') {

  toFind = toFind.toLowerCase();

  let target = message.mentions.users.first() || message.author;

  if (!target && message.mentions.members)
    target = message.mentions.members.first();

  if (!target && toFind) {

    target = message.guild.members.find(member => {

      return member.displayName.toLowerCase().includes(toFind) || member.user.tag.toLowerCase().includes(toFind)

    });
  }
  if (!target)
    target = message.member;
  return target;

}

module.exports.run = (client, message, args) => {

    let person = getMember(message, args[0]);

    if (!person || message.author.id === person.id) {
	    
      const embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`Tu es très très narcisique toi la....`)
        .setThumbnail(person.displayAvatarURL)
        .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
   	    .setTimestamp();
      message.channel.send(embed);
      return
    }

  const love = Math.random() * 100;
  const loveIndex = Math.floor(love / 10);
  const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

  const embed = new MessageEmbed()
    .setColor(color)
    .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
    .setThumbnail(person.displayAvatarURL)
    .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
    .setTimestamp(); 
    
    message.channel.send(embed);

}

//module.exports.help = MESSAGES.COMMANDS.FUNNY.LOVE;

module.exports.help = {
  name: "love",
  aliases: ["amour"],
  category: ":balloon: ≫ Funny",
  description: "Statistiques d'amour entre 2 personnes.",
  cooldown: 0,
  usage: "<@user1> <@user2>",
  isUserAdmin: false,
  permissions: false,
  args: false,
};