const yargs = require('yargs');

const lmgtfy = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  if (args._.length === 0) {
    bot.sendMessage({
      to: channelID,
      message: `https://www.lmgtfy.com/?q=how%20to%20use%20a%20chat%20bot`
    });
    return;
  }


  try {
    const query = encodeURI(args._.join(' '));
    bot.sendMessage({
      to: channelID,
      message: `https://www.lmgtfy.com/?q=${query}`
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = lmgtfy;
