const _thesaurize = require('thesaurize');
const yargs = require('yargs');

const thesaurize = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  if (args._.length === 0) {
    bot.sendMessage({
      to: channelID,
      message: _thesaurize('You must include a message to thesaurize.')
    });
    return;
  }

  const message = args._.join(' ');

  try {
    bot.sendMessage({
      to: channelID,
      message: _thesaurize(message)
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = thesaurize;
