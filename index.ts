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


const token = '954158159:AAFRwclM4s-ERRLbUicebYpGR_0Oz7cuLtA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const botTriggerRegExp = RegExp('^\\/stm (.*)');

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (botTrigger(msg)) {
        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, '😘 ' + msg.from.first_name + ' ::::msg: ' + msg.text);
    }
});

const botTrigger = (msg: TelegramBot.Message) => botTriggerRegExp.test(msg.text) || msg.chat.type === 'private';