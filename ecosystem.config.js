module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      env: {
        BOT_TOKEN: "6421391676:AAE-0C21BHQ3SVm0fysCHsQTuJRkDSOaSnk",
        PORT: 3000
      }
    }
  ]
}
