Discord = require("discord.io");
winston = require("winston");
dotenv = require("dotenv");
help = require("./commands/help");
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

// Read env files
dotenv.config();

// Configure logger settings
const logger = winston.createLogger({
  transports: [
    // new winston.transports.File({
    //   filename: 'error.log',
    //   level: 'error',
    //   format: winston.format.json()
    // }),
    // new transports.Http({
    //   level: 'warn',
    //   format: winston.format.json()
    // }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

logger.info("Starting server");

// Initialize Discord Bot
const bot = new Discord.Client({
  token: process.env.DISCORD_TOKEN,
  autorun: true
});

bot.on("ready", evt => {
  logger.info("Connected");
  logger.info(`Logged in as: ${bot.username} (${bot.id})`);
});

bot.on("message", (user, userID, channelID, message, evt) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) === "!") {
    let args = message.substring(1).split(" ");
    const cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      case "ping":
        ping(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "help":
        help(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "cambridge":
        cambridge(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "corporate":
        corporate(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "cowthink":
      case "cowsay":
        cowsay(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "crazify":
        crazify(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "dadjoke":
        dadjoke(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "dilbert":
        dilbert(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "garble":
        garble(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "has-the-large-hadron-collider-destroyed-the-world-yet":
        staticOutput(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "joke":
        joke(bot, user, userID, channelID, cmd, args, evt);
        break;
      case "thesaurize":
        thesaurize(bot, user, userID, channelID, cmd, args, evt);
        break;
    }
  }
});

bot.on("disconnect", () => {
  logger.info("Bot disconnected");
});
