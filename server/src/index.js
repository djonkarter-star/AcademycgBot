const express = require("express");
const { Telegraf } = require("telegraf");
require("dotenv").config();

const app = express();

// 🔑 токен берём из .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда /start
bot.start((ctx) => ctx.reply("Добро пожаловать в AcademyCG! 🚀"));

// Команда /courses
bot.command("courses", (ctx) => {
  ctx.reply("📚 Доступные направления:\n1. Программирование\n2. Дизайн\n3. Маркетинг");
});

// Запуск бота
bot.launch();
console.log("✅ Telegram бот запущен!");

// Express для WebApp (пока простая заглушка)
app.get("/", (req, res) => {
  res.send("AcademyCG Bot работает!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Сервер запущен на порту ${PORT}`));
