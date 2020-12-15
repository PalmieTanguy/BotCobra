//Croux
const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");
const Server = require("./server");
const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

Server();
client.login(process.env.TOKEN);