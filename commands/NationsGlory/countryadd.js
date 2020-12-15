//Kolowy
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = (client, message, args) => {

  message.delete({ timeout: 1000 }).catch(console.error);

  const Serveur = args[0].toLowerCase()
  if(Serveur == "blue" || Serveur == "orange" || Serveur == "yellow" || Serveur == "white" || Serveur == "black" || Serveur == "cyan" || Serveur == "lime" || Serveur == "coral" || Serveur == "pink" ){
  a = 1
  } else {
  message.channel.send(`Le serveur ${Serveur} n'existe pas...\nJe ne connais que le **Blue** et l'**Orange**`).then(msg => { 

  msg.delete({ timeout: 15000 }).then(msg => console.log(`Deleted message from ${msg.author.username} after 15 seconds`)).catch(console.error);
})
return
}
  var Pays = args[1]
  message.channel.send(`Êtes-vous un Empire ? 👍\nOu un Pays ? 👎 `).then(msg => { 
  msg.delete({ timeout: 15000 }).then(msg => console.log(`Deleted message from ${msg.author.username} after 15 seconds`)).catch(console.error);
})
  message.react('👍').then(() => message.react('👎'));

  const filter = (reaction, user) => {
  return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

  message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
  .then(collected => {
  const reaction = collected.first();
  if (reaction.emoji.name === '👍') {
  message.channel.send(`Le pays ${Pays}, du serveur ${Serveur}, a été ajouté à la liste ! :open_mouth:`).then(msg => { 
  msg.delete({ timeout: 10000 }).then(msg => console.log(`Deleted message from ${msg.author.username} after 10 seconds`)).catch(console.error);
});

  ally.push(`${message.guild.id}.${Serveur}EMP`, `${Pays}`)
//Pays
  const liste_pays = ally.get(`${message.guild.id}.${Serveur}PAYS`)
liste_pays.sort()
  var liste_pays_well = ``
  var x = liste_pays.length
  for(let i = 0; i < x; i++) {
liste_pays_well = `${liste_pays_well} \n ▫  ${liste_pays[i]}`
}

//Emp
  const liste_Emp = ally.get(`${message.guild.id}.${Serveur}EMP`);
liste_Emp.sort()
  var liste_Emp_well = ``

  for(let i = 0; i < liste_Emp.length; i++) {
liste_Emp_well = `${liste_Emp_well} \n ▫ Empire ${liste_Emp[i]}`
}

//Embed
  const embed = new MessageEmbed()
	 .setTitle(`__Liste des pays du ${Serveur}__ :`, message.guild.iconURL)
	 .setDescription(`👑▫Empires :\n ${liste_Emp_well}\n\n\n⚜▫Pays :\n ${liste_pays_well}\n\n`)
	 .setColor("#0474dc")
         .setFooter("Extract to NG Blue ©", "https://cdn.discordapp.com/attachments/707987149013778484/781226919953825854/Blue2.jpg");

message.channel.send(embed)

} else if (reaction.emoji.name === '👎') {
message.channel.send(`Le pays ${Pays}, du serveur ${Serveur}, a été ajouté à la liste ! :open_mouth:`).then(msg => { 
msg.delete({ timeout: 10000 }).then(msg => console.log(`Deleted message from ${msg.author.username} after 10 seconds`)).catch(console.error);
});
ally.push(`${message.guild.id}.${Serveur}PAYS`, `${Pays}`)

//Pays
  const liste_pays = ally.get(`${message.guild.id}.${Serveur}PAYS`);
  var liste_pays_well = ``
  var x = liste_pays.length
  for(let i = 0; i < x; i++) {
  liste_pays_well = `${liste_pays_well} \n :white_small_square:  ${liste_pays[i]}`
}

//Emp
  const liste_Emp = ally.get(`${message.guild.id}.${Serveur}EMP`);
  liste_Emp.sort()
  var liste_Emp_well = ``

  for(let i = 0; i < liste_Emp.length; i++) {
  liste_Emp_well = `${liste_Emp_well} \n :white_small_square: Empire ${liste_Emp[i]}`
}

//Embed
  const embed = new MessageEmbed()
	 .setTitle(`Liste des pays du ${Serveur}`, message.guild.iconURL)
	 .setDescription(`:crown::white_small_square:Empires : \n ${liste_Emp_well} \n \n \n :fleur_de_lis: :white_small_square:Pays :\n ${liste_pays_well} \n \n `)  
	 .setColor("#0474dc")
         .setFooter("Extract to NG Blue ©", "https://cdn.discordapp.com/attachments/707987149013778484/781226919953825854/Blue2.jpg");
message.channel.send(embed)
}

}).catch(collected => {
  message.reply('you reacted with neither a thumbs up, nor a thumbs down.').then(msg => console.log(`Deleted message from ${msg.author.username} after 15 seconds`)).catch(console.error);
});

    message.delete()

};

module.exports.help = MESSAGES.COMMANDS.NATIONSGLORY.COUNTRYADD;