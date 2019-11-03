const oneLinerJoke = require('one-liner-joke');
const yargs = require('yargs');

const joke = (bot, user, userID, channelID, cmd, args, evt) => {
  try {
    const jokeResult = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage', 'blondes', 'sex', 'men', 'women']
    });
    bot.sendMessage({
      to: channelID,
      message: jokeResult.body
    });

  } catch (e) {
    console.log(e);
    bot.sendMessage({
      to: channelID,
      message: e.code === 'An unknown error occurred, please contact my keeper!'
    });
  }

};

module.exports = joke;
