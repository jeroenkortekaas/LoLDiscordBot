const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const token = process.env.DiscordToken

exports.default = () =>  {
    const client = new CommandoClient({
	commandPrefix: '!',
	owner: '249616181982396418',
	invite: 'https://discord.gg/D3wC5b',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity("with myself")
});

client.on('error', console.error);

client.login(token);

}