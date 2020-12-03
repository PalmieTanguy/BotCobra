//const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  if (!args[1]) return message.reply("S'il te plaît, pose-moi une question !");

  let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non", "je ne suis pas sur", "mec tg tu es moche je te reponds pas"];

  let question = args.slice(0).join(" ");
  let res = Math.floor(Math.random() * replies.length);

  const embed = new MessageEmbed()
    .setTitle(`${args[0]}'s body `, message.guild.iconURL)
    .setAuthor(message.author.tag)
    .setColor('#58D3F7')
    .addField("Question", question)
    .addField("Réponse", replies[res])
    .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
    .setTimestamp();    
    message.channel.send(embed)
};

//module.exports.help = MESSAGES.COMMANDS.FUNNY.BALL;

module.exports.help = {
  name: "ball",
  aliases: ["8balls", "question", "q"],
  category: ":balloon: ≫ Funny",
  description: "Réponds à une question.",
  cooldown: 0,
  usage: "<question ?>",
  isUserAdmin: false,
  permissions: false,
  args: false,
};