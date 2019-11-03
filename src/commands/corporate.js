const createIpsum = require('corporate-ipsum');

const corporate = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  try {
    bot.sendMessage({
      to: channelID,
      message: createIpsum()
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = corporate;
