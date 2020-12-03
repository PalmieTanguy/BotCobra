const { MESSAGES } = require("../../util/constants");
require('dotenv').config() // Protect the token.
const { MessageEmbed } = require('discord.js'); // DiscordJS.
const { moment } = require("moment");

module.exports.run = async (bot, message, args) => {

  const afkTimer = message.channel.guild.afkTimeout / 60;
  //var owner = message.channel.guild.members.get(message.channel.guild.ownerID);
  let connectés = message.guild.members.filter(ppl => ppl.presence.status !== 'offline' && !ppl.user.bot).size;
  let bots = message.guild.members.filter(member => member.user.bot).size;
  message.channel.createInvite()

    .then(invite => {
      const embed = new MessageEmbed()
        .setAuthor(`Informations about ${message.channel.guild.name === null ? `` : ''}${message.channel.guild.name !== null ? message.channel.guild.name : ''}`, `${message.channel.guild.iconURL === null ? `` : ''}${message.channel.guild.iconURL !== null ? message.channel.guild.iconURL : ''}`)
        .setDescription("")
        .addField("Name:", message.guild.name, true)
        .addField("ID:", message.guild.id, true)
        .addField("Owner:", message.guild.owner.user, true)
        .addField("Members:", message.guild.memberCount, true)
        .addField("Bots:", bots, true)
        .addField("Online:", connectés, true)
        .addField("Saloons:", message.guild.channels.size, true)
        .addField("Roles:", message.guild.roles.size, true)
        .addField(`Server localization:`, `${message.channel.guild.region}`, true)
        .addField("Creation date:", `The ${moment(message.guild.createdAt).format("DD/MM/YYYY hh:mm")}`, true)
        .addField("You join:", `The ${moment(message.member.joinedAt).format("DD/MM/YYYY hh:mm")}`, true)
        .addField("Bot join:", `The ${moment(message.guild.me.joinedAt).format("DD/MM/YYYY hh:mm")}`, true)
        .addField(`Verificatin level:`, `${message.channel.guild.verificationLevel === null ? `` : ''}${message.channel.guild.verificationLevel !== null ? message.channel.guild.verificationLevel : ''}`, true)
        .addField(`Time before AFK:`, `${afkTimer === null ? `` : ''}${afkTimer !== null ? afkTimer + 'min' : ''}`, true)
        .addField("Link:", "https://discord.gg/" + `${invite.code}`, true)
        .addField(`Roles:`, `${message.channel.guild.roles.map(c => c.name).join(', ')}`)
        .setColor("GREEN")
        .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
        .setTimestamp();
      message.channel.send(embed)
    })
}

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.SERVERINFO;