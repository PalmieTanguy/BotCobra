//Croux + XDemon
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js')
const ownerId = process.env.OWNERID.split(',');
const color = "DARK"

module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);
  
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

  await message.delete();

  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle('__Le bot a été éteint__')
    .setDescription('Pour le redémarrer, allez exécuter le scipt à l\'adresse suivante !\n\n<https://repl.it/@croux31lacroux/Cobra>')
    .setFooter("Page d'info", "https://images.emojiterra.com/google/android-11/128px/2139.png")
    .setTimestamp();


  guild.channels.cache.find(channel => channel.name === '🔏┃logs').send(embed);
  
  console.log("Le bot a été éteint !")
  process.exit();
    
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;