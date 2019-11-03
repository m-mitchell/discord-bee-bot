const staticOutput = (bot, user, userID, channelID, cmd, args, evt) => {
  const result = "No.";

  bot.sendMessage({
    to: channelID,
    message: result
  });
}

module.exports = staticOutput;
