const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });
const Gpio = require('onoff').Gpio;
const valve1 = new Gpio(17, 'out');
const valve2 = new Gpio(27, 'out');
const valve3 = new Gpio(22, 'out');

var myBot = {};

bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "Pulsa en el teclado lo que quieras hacer", {
      "reply_markup": {
          "keyboard": [['Abrir', 'Cerrar']]
        }
    });
});

// Matches "/echo [whatever]"
bot.onText(/Abrir/, (msg, match) => {

  const chatId = msg.chat.id;
  //const resp = match[1]; // the captured "whatever"
  abrirInline(msg.chat.id);
});

function abrirInline(chatId){
  bot.sendMessage(chatId, "¿Qué válvula deseas abrir?", {
      "reply_markup": {
          "inline_keyboard": [
              [
                  {
                      text: "Válvula 1",
                      callback_data: valve1,
                  },
                  {
                      text: "Válvula 2",
                      callback_data: valve2,
                  },
                  {
                      text: "Válvula 3",
                      callback_data: valve3,
                  },
              ],
          ],
      },
  });
}

bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;
    console.log(callbackQuery.data);
    bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "You clicked!"));
});


module.exports = myBot;
