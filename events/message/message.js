//Crouxconst { Collection } = require("discord.js");

module.exports = (client, message) => {
 
//Messages privés
  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

//Alias
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

//Permission : true
  if (command.help.permissions && !message.author.asPermission("BAN_MEMBERS")) return message.reply("Tu n'as pas les permissions pour exécuter cette commande car elle possède la permission **`KICK_MEMBERS`** !");

//Args: true
  if (command.help.args && !args.length) {
    let noArgsReply = `Il me faut des arguments pour cette commande - ${message.author} !`;

    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande : \`${process.env.PREFIX}${command.help.name} ${command.help.usage}\``

    return message.channel.send(noArgsReply);
  };

//isUSerAdmin : true
  if (command.help.isUserAdmin && !user) return message.reply("IL faut mentionner un utilisateur !);")
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first().hasPermission("BAN_MEMBERS"))) return message.reply("Tu n'as pas les permissions pour exécuter cette commande sur cet utilisateur car il possède la permission **`BAN_MEMBERS`** !");

//cooldown

   //Vérifie si un cooldown existe pour la commande puis créé la collection 
  if (!client.cooldowns.has(command.help.name)) {
  client.cooldowns.set(command.help.name, new Collection());
  };
  //Récupère le temps où la commande a été éxécutée
  const timeNow = Date.now();
  //Récupère la valeur de cooldown de la commande
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;
 
  //Vérifie si l'utilisateur est présent dans la collection et le temps qu'il reste
  if (tStamps.has(message.author.id)) {
  const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

  //Message d'attente du cooldown
  if (timeNow < cdExpirationTime) {
    timeLeft = (cdExpirationTime - timeNow) / 1000
    return message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande : ${command.help.name}`);
  };
};

   //Supression de la collection cooldowns après le temps impartis
tStamps.set(message.author.id, timeNow);
setTimeout(() => tStamps.delete(message.author.id), cdAmount);

//module.exports.run = (client, message, args) => {code};
  command.run(client, message, args);
};