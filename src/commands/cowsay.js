const _cowsay = require('cowsay');
const yargs = require('yargs');

const cowsay = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  const options = {
  	text: args._.join(' '),
    e:  args.e || args.eyes || 'oo',
    T: args.t || args.tongue || '',
    r: args.r || null,
    f: args.f || 'default',
  };
  try {
    const cowsayResult = args.think || cmd === 'cowthink' ? _cowsay.think(options) : _cowsay.say(options);
    bot.sendMessage({
      to: channelID,
      message: `\`\`\`\n${cowsayResult}\n\`\`\``
    });

  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: e.code === 'ENOENT' ?
        `I couldn't find a cow named ${args.f}!` :
        'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = cowsay;
