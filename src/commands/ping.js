const ping = (bot, user, userID, channelID, args, evt) => {
  bot.sendMessage({
    to: channelID,
    message: 'Pong!'
  });
}

module.exports = ping;
