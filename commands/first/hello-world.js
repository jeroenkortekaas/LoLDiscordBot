const { Command } = require('discord.js-commando');

module.exports = class HelloWorldCommand extends Command {
    constructor(client) {
		super(client, {
			name: 'hello-world',
			group: 'first',
			memberName: 'hello-world',
			description: 'Replies with a hello world.',
		});
	}

	run(message) {
		return message.say('Hello World!');
	}
};