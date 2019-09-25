import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', function (req, res) {
    res.send('Hello:)');
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});


// replace the value below with the Telegram token you receive from @BotFather
const token = '954158159:AAFRwclM4s-ERRLbUicebYpGR_0Oz7cuLtA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, msg.text);
});