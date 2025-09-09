module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      watch: false,
      env: {
        BOT_TOKEN: "6421391676:AAE-0C21BHQ3SVm0fysCHsQTuJRkDSOaSnk", // сюда вставь свой токен
        PORT: 3000
      }
    }
  ]
}
