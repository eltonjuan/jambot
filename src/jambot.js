import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import * as config from './config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/message', (req, res) => {

	// ignore messages from ourself
	if (req.body.user_id === config.BOT_ID || req.body.user_name === config.USERNAME) {
		console.log(req.body.user_id);
		console.log(req.body.user_name);
		return res.end();
	}

	console.log(req.body);

	const resp = {
		text: 'sample response'
	}
	
	res.json(resp);
});

// boot the app
app.listen(config.PORT, () => {
	console.log(`jambot alive and listening on port ${config.PORT}`);
});