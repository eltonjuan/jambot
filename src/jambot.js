import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import * as config from './config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/message', (req, res) => {
	const resp = {
		text: 'sample response'
	}
	
	res.json(resp);
});

// boot the app
app.listen(config.PORT, () => {
	console.log(`jambot alive and listening on port ${config.PORT}`);
});