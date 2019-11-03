const funnyWords = require('funny-words');
const yargs = require('yargs');

const cambridge = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  if (args._.length === 0) {
    bot.sendMessage({
      to: channelID,
      message: funnyWords('You must include a message to cambridgify.')
    });
    return;
  }

  const message = args._.join(' ');

  try {
    bot.sendMessage({
      to: channelID,
      message: funnyWords(message)
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
