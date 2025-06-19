module.exports = (api, event, args) => {
  api.sendMessage("🏓 Pong!", event.threadID);
};


---

🔹 commands/help.js

module.exports = (api, event, args) => {
  api.sendMessage("📜 Commands: /ping, /help", event.threadID);
};


---
