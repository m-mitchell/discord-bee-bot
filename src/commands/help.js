const help = (bot, user, userID, channelID, cmd, args, evt) => {
  bot.sendMessage({
    to: channelID,
    message: 'halp!'
  });
}

module.exports = help;
