const { readdirSync } = require("fs");
const trad = require("../cmdPackages/traduction/traduction.js");

const loadCommands = (client, dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`../${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée : ${getFileName.help.name}`)
    }
  });
}

const loadEvents = (client, dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`../${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      console.log(`Évènement chargé : ${evtName}`)
      client.on(evtName, evt.bind(null, client));
    }
  });

client.on("message", (message) => {
    if (message.author.bot) return;
    trad.trad(message, client);
    });
}

module.exports = {
  loadCommands,
  loadEvents,
}