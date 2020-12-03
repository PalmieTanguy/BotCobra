const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { moment } = require('moment');
const Enmap = require("enmap");

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    if (!user.roles){
        user.roles = [];
    }
    const member = message.guild.member(user);
    const key = `${message.guild.id}-${message.author.id}`;

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
        .setTitle(`Informations a propos de ${user.tag}`, message.guild.iconURL)
        //.setDescription(client.points.get(key, description))
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL)
        .addField("ID:", `${user.id}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("Status:", `${user.presence.status}`, true)
        .addField("Dans le serveur", message.guild.name, true)
        .addField("Jeu:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
       /* .addField("A join le serveur le:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
        //.addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) */
        //.addField('Roles:', user.roles ? user.roles.map(r => `${r}`).join(' | ') : "", true)
        .setFooter("By Kolowy • Milice ", 'https://skins.nationsglory.fr/face/Kolowy/3d/15')
    message.channel.send(embed);

    return;
}

module.exports.help = MESSAGES.COMMANDS.UTILITAIRES.USERINFO;