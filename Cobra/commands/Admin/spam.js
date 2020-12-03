//const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } =  require('discord.js')
const ownerId = process.env.OWNERID.split(',');
const color = "DARK"

module.exports.run = (client, message, args) => {

  let notAccess=true;
  for (let i = 0; i < ownerId.length; i++) {
    console.log(ownerId[i],message.author.id)
      if(ownerId[i]==message.author.id){
        notAccess=false;
    }
  }

  if(notAccess== true){
      return message.reply("**Seuls les fondateurs du `BOT` peuvent exécuter cette commande !**");
  }

  var mentionned = message.mentions.users.first();

  let victime="";
  if(mentionned){
     victime = client.users.cache.get(mentionned.id);
  }
  else {
     victime = client.users.cache.get(args[0]);
  }
  console.log(victime)
  let nbMessage=200;
  nb=args[1]
  console.log(nb)
  console.log(args[0],args[1],args[2])
  if(args[1]){
    nbMessage=args[1];
    console.log("pas d'args")
  }
  console.log(nbMessage)

  for (let i = 0; i < nbMessage; i++) {
    victime.send("messageSplited");
    console.log(victime.username+"a reçu le message n°" + i);
  }
  console.log("Spam accomplis !");

  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle('__Spam effectué__')
    .setDescription(`La commande de spam a été éxécutée par ${message.author} !\n\n`+nbMessage+` messages ont été envoyé en MP à ${mentionned}...`)
    .setFooter("Spam", "https://images.emojiterra.com/google/android-11/128px/1f47e.png")
    .setTimestamp();

  guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
  
};

//module.exports.help = MESSAGES.COMMANDS.ADMIN.DROLESPAM;

module.exports.help = {
  name: "spam",
  aliases: ["spamming", "spammer"],
  category: ":a: ≫ Admin",
  description: "Spamme un utilisateur.",
  cooldown: 0,
  usage: "<nbr_mess> <@user>",
  isUserAdmin: false,
  permissions: false,
  args: false,
};