require("dotenv").config();
const express = require("express");
const { Telegraf } = require("telegraf");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Читаем токен из .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Команды бота
bot.start((ctx) => ctx.reply("Добро пожаловать в AcademyCG! 🚀"));
bot.command("courses", (ctx) => {
  ctx.reply("📚 Доступные направления:\n1. Программирование\n2. Дизайн\n3. Маркетинг");
});

// Запуск бота
(async () => {
  try {
    await bot.launch();
    console.log("✅ Telegram бот запущен!");
  } catch (err) {
    console.error("❌ Ошибка запуска бота:", err);
  }
})();

// Express-заглушка
app.get("/", (req, res) => {
  res.send("AcademyCG Bot работает! 🚀");
});

app.listen(PORT, () => console.log(`🌍 Сервер запущен на порту ${PORT}`));

// Корректное завершение
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
