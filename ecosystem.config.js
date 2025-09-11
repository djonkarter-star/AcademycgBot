// ecosystem.config.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "./server/src/index.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
        BOT_TOKEN: process.env.BOT_TOKEN, // явно подхватываем токен
      },
    },
  ],
};
