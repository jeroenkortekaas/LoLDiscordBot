const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const token = 'NzA0Mzc1OTM0NDQyMTQzNzY1.XqgFuQ.HQc2CopxTtPXXW7HGtcmvkYeUFM'

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