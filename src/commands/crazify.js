const crazyCase = require('crazy-case');
const yargs = require('yargs');

const cambridge = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);
  var initialLetter = Math.random() >= 0.5;

  if (args._.length === 0) {
    bot.sendMessage({
      to: channelID,
      message: crazyCase('You must include a message to crazify.', initialLetter)
    });
    return;
  }

  const message = args._.join(' ');

  try {
    bot.sendMessage({
      to: channelID,
      message: crazyCase(message, initialLetter)
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = cambridge;
