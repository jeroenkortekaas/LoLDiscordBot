const { Command } = require('discord.js-commando');

module.exports = class HelloWorldCommand extends Command {
    constructor(client) {
		super(client, {
			name: 'h',
			group: 'first',
			memberName: 'h',
			description: 'Replies with a hello world.',
		});
	}

	run(message) {
		let role =message.guild.roles.find('name', 'Moderator')
		if(message.member._roles.find(r=>r === role.id)){
		return message.say('Im a mod')
	}
		return message.say('Hello World! My name is bot');
	}
};