import Slack from 'slack-client';
import mongoose from 'mongoose';
import {Message} from './models/Message';
import {handler, reactor} from './MessageHandler';
import * as config from './config';


// start up jambot
const slack = new Slack(config.SLACK_TOKEN, config.AUTO_RECONNECT, config.AUTO_MARK);

slack.on('open', () => {
	console.log(`Connected to Slack as @${slack.self.name}`)
});

slack.on('message', (msg) => {
	const parsed = handler(msg);
	if (!parsed) { 
		return;
	};

	// react to the message
	reactor(parsed, slack);

	// store the message
	
	

});

slack.on('error', (err) => {
	console.log('error connecting to slack');
	throw new Error(err);
});

slack.login();

mongoose.connect(config.MONGO);