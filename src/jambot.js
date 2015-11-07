import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// boot the app
app.listen(8080, () => {
	console.log('jambot alive and listening on port: ');
});