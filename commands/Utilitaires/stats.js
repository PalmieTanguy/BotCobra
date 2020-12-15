//Croux
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const color = "RANDOM";

module.exports.run = async(client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  message.guild.members.fetch().then(fetchAll => {

    const offline = fetchAll.filter(m => m.presence.status == 'offline');

    const dnd = fetchAll.filter(m => m.presence.status == 'dnd')

    message.channel.send(`Actuellement ${fetchAll.size} membres sur le serveur dont ${offline.size} hors-ligne et ${dnd.sizef} occupés !`)
  });

  message.delete()

};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.STATS;