module.exports = {
  apps: [
    {
      name: "telegram-bot",
      script: "index.js",
      watch: true,
      env_file: ".env",   // ✅ вот эта строка подхватит твой .env
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
