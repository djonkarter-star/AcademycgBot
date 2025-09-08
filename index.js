const express = require("express");
const { Telegraf } = require("telegraf");

const app = express();

// 🔑 Подставь сюда свой токен от бота
const bot = new Telegraf("ВАШ_ТОКЕН_БОТА");

// Простая команда для проверки
bot.start((ctx) => ctx.reply("Добро пожаловать в AcademyCG! 🚀"));

bot.command("courses", (ctx) => {
  ctx.reply("📚 Доступные направления:\n1. Программирование\n2. Дизайн\n3. Маркетинг");
});

// Запуск бота
bot.launch();
console.log("✅ Telegram бот запущен!");

// Express нужен для вебхуков (пока заглушка)
app.get("/", (req, res) => {
  res.send("AcademyCG Bot работает!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Сервер запущен на порту ${PORT}`));
