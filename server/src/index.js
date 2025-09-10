require("dotenv").config();
const express = require("express");
const { Telegraf } = require("telegraf");

const app = express();

// Загружаем токен из .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Команды бота
bot.start((ctx) => ctx.reply("Добро пожаловать в AcademyCG! 🚀"));
bot.command("courses", (ctx) => {
  ctx.reply("📚 Доступные направления:\n1. Программирование\n2. Дизайн\n3. Маркетинг");
});

// Для вебхуков можно использовать express (на будущее)
app.get("/", (req, res) => {
  res.send("AcademyCG Bot работает! ✅");
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Сервер запущен на порту ${PORT}`));

// Запуск бота
bot.launch().then(() => {
  console.log("🤖 Telegram бот успешно запущен!");
});
