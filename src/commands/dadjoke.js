const dadJokes = require('@mikemcbride/dad-jokes');

const dadjoke = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  try {
    bot.sendMessage({
      to: channelID,
      message: dadJokes.random()
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = dadjoke;
