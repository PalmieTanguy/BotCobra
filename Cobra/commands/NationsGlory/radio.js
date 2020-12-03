const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {

    if (message.member.voice.channel) {
        const voiceChannel = message.member.voice.channel
        voiceChannel.join().then(connection => {
            connection.play('https://radio.nationsglory.fr:8000/ngradio', { volume: 0.45});
        }).catch(console.error);
    } else {
        message.channel.send("vous n'etes pas dans un channel vocal") 
        return
    }
    
 const radio = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
    .setTitle('Bonne écoute ! 📻')
    .setColor("#0474dc")
    .setDescription("Vous avez lancé la radio de NationsGlory !")
    .setFooter("Extract to NG Radio © ", 'https://static.nationsglory.fr/N24y2366y4.png')
  message.channel.send(radio)

};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.RADIO;