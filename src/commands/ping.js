const ping = (bot, user, userID, channelID, cmd, args, evt) => {
  bot.sendMessage({
    to: channelID,
    message: 'Pong!'
  });
}

module.exports = ping;
