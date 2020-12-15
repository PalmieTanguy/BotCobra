const { MessageEmbed } = require("discord.js")
const moment = require("moment");
const status = "visible";
const color = "GOLD";

module.exports = async (client) => {  
  console.log(
	`
〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

		${client.user.tag}

➻  Users : ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
➻  Servers : ${client.guilds.cache.size}
➻  Status : ${status}
➻  Date : ${moment(client.user.onAt).utcOffset('+0100').format("DD/MM/YYYY à HH:mm")}

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
  `
	);

  let activities = [".help", `embêter ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, `être sur ${client.guilds.cache.size} servers`], i = 0;

  setInterval(() => client.user.setPresence({
    status: status,
    activity: {
      name: `${activities[i++ % activities.length]}`,
      type: "PLAYING",
      }
    }), 3000
  );

 const embed = new MessageEmbed()
	.setColor(color)
	.setTitle("BOT ON ! :white_check_mark: ")
	.addFields(
	{ name:"Users", value: `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, inline: true },
	{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
	{ name: "Status", value: `${status}`, inline: true },
	{ name: "Date", value: `${moment(client.user.onAt).utcOffset('+0100').format("DD/MM/YYYY à HH:mm")}`, inline: true },
	);

  client.channels.cache.find(channel => channel.name === "🔏┃logs").send(embed);
};