const { MESSAGES } = require("../../util/constants");
const { MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {
             let lstServer = "";
             let count=0;

  if(!args[0]){
          client.guilds.cache.forEach((server) => {
            const chan = server.channels.cache.find(
                (channel) => channel.type === "text"
            );
            count++;
            lstServer += server.name+"\n";
          })
          lstServer = lstServer.substring(0, lstServer.length-2)
          const embed = new MessageEmbed()
          .setTitle("Le bot est sur les "+count+" serveurs:")
            .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
            .setColor("GREEN");

            //console.table(lstServer.length, lstServer)
          for(let i=0;i<lstServer.length;i++){
            embed.setDescription(lstServer)
          }
          
          message.channel.send(embed);

  }
  /*let guildAvatar = client.guilds.cache.get(args[0]);

  if(!guildAvatar){
        message.reply("Le bot n'est pas présent sur le serveur discord !");
  }
  else{
  let image = guildAvatar.iconURL().replace("webp", "png");

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setImage(image + "?size=2048")
    .setTitle("__Voici la photo de profil du serveur__ :")
    .setDescription(`Requête de ${message.author}`)
    .setColor("GREEN");

  message.channel.send(embed);*/
  }
//};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.SERVER;