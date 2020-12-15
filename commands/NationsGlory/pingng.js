//Kolowy
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { Client } = require('discord.js');
const request  = require('request');
const color = "RANDOM";

module.exports.run = async(client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  request('https://apiv2.nationsglory.fr/launcher/get_players', function (error, response, body) {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 

    const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle("Play ! 🕹", message.guild.iconURL)
    .setDescription(`Il y a actuelement ${body} player sur nationsglory`) 
     .setFooter("Extract to NG Blue ©", "https://cdn.discordapp.com/attachments/707987149013778484/781226919953825854/Blue2.jpg");

    message.channel.send(embed)

  });

    message.delete()
};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.PINGNG;