require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      env: {
        NODE_ENV: process.env.NODE_ENV,
        BOT_TOKEN: process.env.BOT_TOKEN,
        PORT: process.env.PORT || 3000
      }
    }
  ]
};
