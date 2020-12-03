const { Collection } = require('discord.js');
const PREFIX = ".";

module.exports = (client, message) => {

//arguments, autre
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  if(message.channel.type === "dm") return message.reply("Je ne répond pas en **MP** !");

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

//alias
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  
  if (!command) return;

  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Tu n'as pas les permissipons requises pour utiliser cette commande...");

//arguments
  if (command.help.args && !args.length) {

  let noArgsReply = `Il faut des arguments pour cette commande - ${message.author} !`;

//usage
  if (command.help.usage) noArgsReply += `\n Voici comment utiliser la commande : \`${PREFIX}${command.help.name} ${command.help.usage}\``

    return message.channel.send(noArgsReply);
  }

  if (command.help.isUserAdmin && !user) message.reply("Il faut mentionner un utilisateur !");
  
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) return message.reply("Cette commande nécissite la permission `ADMINISTRATOR` !");

  //cooldown
  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;

  if (tStamps.has(message.author.id)) {
  const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

  if (timeNow < cdExpirationTime ) {
    timetLeft = (cdExpirationTime - timeNow) / 1000;
  return message.reply(`Merci d'attendre ${timetLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande ! \`${command.help.name}\`.`);
  }
}

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args);
};