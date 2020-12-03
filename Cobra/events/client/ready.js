const PREFIX = '.';

module.exports = async (client) => {  

  console.log(`〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓`);
  console.log(` `);
  console.log(`${client.user.tag}, prêt à servir\n${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} utilisateurs sur ${client.guilds.cache.size} serveurs !`);
  console.log(` `);
  console.log(`--> Statut : je suis connecté !`);
  console.log(`--> Préfix : ${PREFIX}`);
  console.log(` `);
  console.log(`〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓`);

  x = setInterval (function () {
    client.channels.cache.get("779777187238772807").send(`Heyy viens bump le serv :P`)    
  }, 74000 * 1000);

  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "Soyez curieux discord.gg/KNCz8r5WUE",
      type: "PLAYING",
      //url: "", https://www.twitch.tv/monstercat
    }
  })
};