module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "server/src/index.js",
      watch: true,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
