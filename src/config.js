// ENV SETTINGS
export const PORT = process.env.PORT || 8080;
export const MONGO = process.env.MONGO_URL || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/jambot';

// SLACK SETTINGS
export const SLACK_TOKEN = 'xoxb-14102901285-nH3ajMtWVwnj5ssaNy4LwvvZ';
export const AUTO_RECONNECT = true;
export const AUTO_MARK = true;
export const BOT_ID = 'USLACKBOT';
export const USERNAME = 'jambot';
