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

const commands = {
  'ping': {
    cmd: ping
  },
  'help': {
    cmd: help
  },
  'cambridge': {
    cmd: cambridge
  },
  'corporate': {
    cmd: corporate
  },
  'cowthink': {
    cmd: cowsay
  },
  'cowsay': {
    cmd: cowsay
  },
  'crazify': {
    cmd: crazify
  },
  'dadjoke': {
    cmd: dadjoke
  },
  'dilbert': {
    cmd: dilbert
  },
  'garble': {
    cmd: garble
  },
  'has-the-large-hadron-collider-destroyed-the-world-yet': {
    cmd: staticOutput
  },
  'joke': {
    cmd: joke
  },
  'thesaurize': {
    cmd: thesaurize
  }
};

module.exports = commands;
