const Discord = require('discord.js');
const client = new Discord.Client();
const {Token} = require('./config.json')

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
		message.channel.send('Pong.');
	} 
	else if (command == ("beep")) {
		message.channel.send('Boop.');
	}
	else if (command == "server") {
		message.channel.send(`El Server se llama: ${message.guild.name}\nTiene un total de: ${message.guild.memberCount} miembros`);
	}
console.log(`${message.author.username}: ${message.content}\n`);
});



client.login(Token);
