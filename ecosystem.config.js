module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
