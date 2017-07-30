const TelegramBot = require('node-telegram-bot-api');
const token = '406401864:AAGUti4blFB5nXajiR_SANmGceOGufG3a8c';
const bot = new TelegramBot(token, { polling:true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello fucker! Wanna get some squirt?', {
    'reply_markup':{
      'keyboard': [['Yes!'], ['About']]
    }
  });

});
bot.on  ('message', (msg) => {
  var yes = 'Yes!';
  if (msg.text.indexOf(yes) === 0){
    bot.sendMessage(msg.chat.id, 'Ok, what command should I serve?',{
      'reply_markup':{
        'keyboard': [['Get soil humidity data'],['Water all pots'],['Back']]
      }
    });
  }
  var soilHumidity = 'Get soil humidity data';
  if (msg.text.indexOf(soilHumidity) === 0){
    bot.sendMessage(msg.chat.id, 'Now your pots soil humidity is:');
  }
  var waterPots = 'Water all pots';
  if (msg.text.indexOf(waterPots) === 0){
    bot.sendMessage(msg.chat.id, 'Plants watered!');
  }
  var back = 'Back';
  if (msg.text.indexOf(back) === 0 ){
    bot.sendMessage(msg.chat.id,'I got you back',{
      'reply_markup':{
        'keyboard': [['Yes!'], ['About']]
      }
    });
  }
  var about = 'About';
  if (msg.text.indexOf(about) === 0 ){
    bot.sendMessage(msg.chat.id, 'Lorem ipsum dolor sit amet');
  }
});

function startScreenKeyboard() {
  'reply_markup':{
    'keyboard': [['Yes!'], ['About']]
  }
}
/*
function sendStartMessage(message) {
  var text = "Hello dickhead, wanna get some squirt?";
  var helpButton = {
      text:'About',
      callback_data:'returnHelpMessage'
  }
  var waterPlants = {
      text:'Water all plants',
      callback_data:'waterPlants'
  }

}
*/
