const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });
const valves = require("./valves");
const MSG_OPEN = "¿Qué válvula deseas abrir?";
const MSG_CLOSE = "¿Qué válvula deseas cerrar?";

var myBot = {};

bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "Pulsa en el teclado lo que quieras hacer", {
      "reply_markup": {
          "keyboard": [['Abrir', 'Cerrar']]
        }
    });
});


bot.onText(/(Abrir|Cerrar)/, (msg, match) => {

  const chatId = msg.chat.id;
  inlineChooseValve(msg.chat.id, msg.text.toLowerCase());
});

function inlineChooseValve(chatId, text){
  bot.sendMessage(chatId, "¿Qué válvula deseas "+text+"?", {
      "reply_markup": {
          "inline_keyboard": [
              [
                  {
                      text: text+" 1",
                      callback_data: "1",
                  },
                  {
                      text: text+" 2",
                      callback_data: "2",
                  },
                  {
                      text: text+" 3",
                      callback_data: "3",
                  },
              ],
          ],
      },
  });
}

bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;
    bot.answerCallbackQuery(callbackQuery.id)
        .then(() => {
          if(msg.chat.id!=process.env.TG_CHAT_ID){
            bot.sendMessage(msg.chat.id, "No tienes permisos");
          }else if (MSG_OPEN == msg.text){
            valves.openValve(callbackQuery.data)
            bot.sendMessage(msg.chat.id, "Válvula "+callbackQuery.data+" abierta");
          }else if (MSG_CLOSE == msg.text){
            valves.closeValve(callbackQuery.data)
            bot.sendMessage(msg.chat.id, "Válvula "+callbackQuery.data+" cerrada");
          }
        });
});

module.exports = myBot;
