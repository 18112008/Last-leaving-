const fs = require("fs");
const path = require("path");

let commands = {};

fs.readdirSync(path.join(__dirname, "../commands")).forEach(file => {
  if (file.endsWith(".js")) {
    const name = file.split(".")[0];
    commands[name] = require(`../commands/${file}`);
  }
});

module.exports = commands;


---
