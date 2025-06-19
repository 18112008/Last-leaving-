const login = require("fca-unofficial");
const fs = require("fs");
const commands = require("./utils/commandLoader");

const state = JSON.parse(fs.readFileSync("./config/state.json", "utf8"));

login({ appState: state }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  console.log("🤖 Bot is active...");

  api.listenMqtt((err, event) => {
    if (err || !event.body) return;

    if (event.body.startsWith("/")) {
      const args = event.body.slice(1).split(" ");
      const command = args.shift().toLowerCase();

      if (commands[command]) {
        commands[command](api, event, args);
      } else {
        api.sendMessage("❌ Unknown command.", event.threadID);
      }
    }
  });
});


---
