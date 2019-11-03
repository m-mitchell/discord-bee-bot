const _dilbert = require('dilbert');
const yargs = require('yargs');

const dilbert = (bot, user, userID, channelID, cmd, argsIn, evt) => {
  const args = yargs.parse(argsIn);

  try {
    const callback = image => {
      bot.sendMessage({
        to: channelID,
        message: `http://${image}`
      });
    };

    if (!args.date) {
      _dilbert.getToday(callback);
      return;
    }

    const parts = args.date.split('-');
    const inputDate = new Date(parts[0], parts[1], parts[2]);
    if (!inputDate instanceof Date || !isFinite(inputDate)) {
      bot.sendMessage({
        to: channelID,
        message: `Invalid date "${args.date}". Use a format lilke YYYY-MM-DD.`
      });
      return;
    }
    _dilbert.getDate(inputDate, callback);
  } catch (e) {
    bot.sendMessage({
      to: channelID,
      message: 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = dilbert;
