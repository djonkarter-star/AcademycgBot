module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      env: {
        BOT_TOKEN: "твой_токен_от_BotFather",
        PORT: 3000
      }
    }
  ]
}
