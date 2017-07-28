const TelegramBot = require('node-telegram-bot-api');
const token = '406401864:AAGUti4blFB5nXajiR_SANmGceOGufG3a8c';
const bot = new TelegramBot(token, { polling:true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello fucker!');
});

function sendStartMessage(message) {
  var text = "Hello dickhead, wanna get some squirt?";
  var helpButton = {
      text:'About',
      callback_data:'returnHelpMessage'
  }
  var waterPlants = {
      text:'Water all plants',
      
  }

}
