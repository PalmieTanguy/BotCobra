//Kolowy
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, version } = require('discord.js'); 
const  moment  = require("moment");


module.exports.run = async (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  function getUptime() {
    let sec_num = parseInt(process.uptime(), 10);
    let days = Math.floor(sec_num / 86400),
      hours = Math.floor((sec_num - (days * 86400)) / 3600),
      minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60),
      seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);
    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    let time = "";
    if (parseInt(days, 10) > 1) time += days + 'd';
    if (parseInt(hours, 10) > 1) time += hours + 'h ';
    if (parseInt(minutes, 10) > 1) time += minutes + 'min ';
    if (parseInt(seconds, 10) > 1) time += seconds + 'sec ';
    return time;
  }
  client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
  let guild = message.guild;
  const embed = new MessageEmbed()
         .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
  	 .setTitle(`Informations a propos du Serveur : ${guild.name}`, message.guild.iconURL)
  	 .setDescription(guild.approximate_member_count)
   	 .setColor("GREEN")
  	 .addField("Description :", `${guild.description}`, true)
   	 .addField("Region", guild.region, true)
  	 .addField("Salons: ", `${client.channels.cache.size}`, true)
  	 .addField("Utilisateurs : ", guild.memberCount, true)
  	 .addField("Utilisateurs en ligne :", 	 message.guild.members.cache.filter(member => member.presence.status !== "offline").size, true)
  	 .addField("Latence d'API: ", `${Math.round(client.ws.ping)}`+ `ms`, true)
 	  .addField("Memoire: ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  	 .addField("Temps d'online: ", `${getUptime()}`, true)
  	 .addField("Discord.js: ", `${version}`, true)
 	 .addField("Milice:", "v.0.1", true)
  	 .addField("Créer le:", `${moment(client.user.createdAt).format("DD/MM/YYYY hh:mm")}`, true)
  	 .setThumbnail(client.user.displayAvatarURL)
  	 .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
   	.setTimestamp();
  message.channel.send(embed)    
}

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.BOTINFO;