const help = (bot, user, userID, channelID, args, evt) => {
  bot.sendMessage({
    to: channelID,
    message: 'halp!'
  });
}

module.exports = help;
