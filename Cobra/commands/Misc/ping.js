const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { Client } = require('discord.js');
const request  = require('request');

module.exports.run = async(client, message, args) => {
	
  request('https://apiv2.nationsglory.fr/launcher/get_players', function (error, response, body) {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle("Pong ! 🏓", message.guild.iconURL)
    .setDescription(`La lantence du serveur est de ${Math.round(client.ws.ping)}ms.
    Il y a actuelement ${body} player sur nationsglory`)  
    //.setThumbnail('')
     .setColor("#0474db")
     .setFooter("Extract to NG Blue ©", "https://cdn.discordapp.com/attachments/707987149013778484/781226919953825854/Blue2.jpg");

    message.channel.send(embed)

  });
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;