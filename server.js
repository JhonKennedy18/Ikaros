const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

///BOT///
const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

if (!fs.existsSync('./config.json')) Token = process.env.Token;
else Token = require("./config.json");


let prefix = ":"

client.once('ready', () => {
	console.log('Ready!');
});

//Evento mensaje
client.on('message', message => {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		
		if (command == ("ping")) {
		let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addFields(
            { name: '🏓 Pong', value: `${Date.now() - message.createdTimestamp}ms` },
            { name: 'Ping Api', value: `${Math.round(client.ws.ping)}ms` },
        );
    message.channel.send(embed);
	} 
	else if (command == ("beep")) {
		message.channel.send('Boop.');
	}
	else if (command == "server") {
		message.channel.send(`El Server se llama: ${message.guild.name}\nTiene un total de: ${message.guild.memberCount} miembros`);
	}
console.log(`${message.author.username} ${message.content}\n`);
});



client.login(Token);
