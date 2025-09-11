module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      env: {
        NODE_ENV: "production",
        BOT_TOKEN: "6421391676:AAE-0C21BHQ3SVm0fysCHsQTuJRkDSOaSnk"
      }
    }
  ]
};
