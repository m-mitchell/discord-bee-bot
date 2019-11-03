Discord = require("discord.io");
winston = require("winston");
dotenv = require("dotenv");
commands = require("./commandManager");

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
    if (Object.keys(commands).includes(cmd)) {
      commands[cmd].cmd(bot, user, userID, channelID, cmd, args, evt);
    }
  }
});

bot.on("disconnect", () => {
  logger.info("Bot disconnected");
});
