ping = require("./commands/ping");
cowsay = require("./commands/cowsay");
cambridge = require("./commands/cambridge");
corporate = require("./commands/corporate");
crazify = require("./commands/crazify");
dadjoke = require("./commands/dadjoke");
dilbert = require("./commands/dilbert");
garble = require("./commands/garble");
joke = require("./commands/joke");
staticOutput = require("./commands/staticOutput");
thesaurize = require("./commands/thesaurize");

const blockquote = input => {
  return input.split('\n').map(line => `> ${line}`).join('\n');
}

const help = (bot, user, userID, channelID, cmd, args, evt) => {
  commandInfo = Object.entries(commands).map(([key, {description, usage}]) => {
    return `**${key}**\n${description}\nUsage: ${usage}\n`;
  });
  bot.sendMessage({
    to: channelID,
    message: "I'll send you a message with the help you asked for!"
  });

  const helpMessage = `Hi, I heard you wanted some help learning how to talk to me. Here is a list of my available commands:
  ${blockquote(commandInfo.join('\n'))}
  If you have any further questions or comments please contact my keeper. Bzzz.
  `;
  bot.sendMessage({
    to: userID,
    message: helpMessage
  });
}

const commands = {
  'ping': {
    cmd: ping,
    description: "Ping Bee Bot to see if he's still around.",
    usage: "`!ping`"
  },
  'help': {
    cmd: help,
    description: "Returns a list of usable commands.",
    usage: "`!help`"
  },
  'cambridge': {
    cmd: cambridge,
    description: "Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae.",
    usage: "`!cambridge <text>`"
  },
  'corporate': {
    cmd: corporate,
    description: "Synergizes innovative new ideas using patented blue-field thinking.",
    usage: "`!corporate`"
  },
  'cowthink': {
    cmd: cowsay,
    description: "Makes a cow think a thing.",
    usage: "`!cowthink <text>`. Try these optional parameters: `--eyes Oo`, `--tongue U`, `-r`, `--f bees`"
  },
  'cowsay': {
    cmd: cowsay,
    description: "Makes a cow say a thing.",
    usage: "`!cowsay <text>`. Try these optional parameters: `--eyes Oo`, `--tongue U`, `-r`, `--f bees`"
  },
  'crazify': {
    cmd: crazify,
    description: "MaKeS yOuR tExT a LiTtLe MoRe InTeReStInG.",
    usage: "`!crazify <text>`"
  },
  'dadjoke': {
    cmd: dadjoke,
    description: '"I\'m tired of dad jokes." "Hi tired of dad jokes, I\'m Dad."',
    usage: "`!dadjoke`"
  },
  'dilbert': {
    cmd: dilbert,
    description: "Displays a Dilbert comic.",
    usage: "`!dilbert`. Try these optional parameters: `--date 2019-01-01`"

  },
  'garble': {
    cmd: garble,
    description: "G̵̪̋a̛͂̒r̴͇͐ḃ̛̲l̝̲͚e̵͕̕s͌̉͟ ̡͎́tͬ͒͝ȟ̤̯e͍͍͂ ͍̬ͯp̛̑͞r̰̫͋o̔̀̔v͏̀̉ȋ͖̟d̥͌͜e̶̮ͭd̒́͊ ̵̺ͅt̀ͥ̚è̸̤x͕̐͑t̲ͧͅ.̬ͧ̇.",
    usage: "`garble <text>`"
  },
  'has-the-large-hadron-collider-destroyed-the-world-yet': {
    cmd: staticOutput,
    description: "Returns whether the large hadron collider has destroyed the world yet.",
    usage: "`!has-the-large-hadron-collider-destroyed-the-world-yet`"
  },
  'joke': {
    cmd: joke,
    description: 'Do you want to hear a joke backwards? Great, start laughing.',
    usage: "`!joke`"
  },
  'thesaurize': {
    cmd: thesaurize,
    description: "Provides a secondary wording for the included content. ",
    usage: "`!thesaurus <text>`"
  }
};

module.exports = commands;
