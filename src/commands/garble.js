const _garble = require('garble');
const yargs = require('yargs');

const garble = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  if (args._.length === 0) {
    bot.sendMessage({
      to: channelID,
      message: _garble('You must include a message to garble.')
    });
    return;
  }

  const message = args._.join(' ');

  try {
    bot.sendMessage({
      to: channelID,
      message: _garble(message)
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = garble;
