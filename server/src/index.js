const express = require("express");
const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const app = express();

// 🔑 токен берём из .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда /start с кнопкой WebApp
bot.start((ctx) => {
  ctx.reply(
    "Добро пожаловать в AcademyCG! 🚀\nНажмите кнопку ниже, чтобы открыть меню.",
    Markup.keyboard([
      [
        Markup.button.webApp(
          "📖 Открыть меню",
          "https://academycg.online" // тут ставим твой домен с WebApp
        )
      ]
    ]).resize()
  );
});

// Команда /courses (для проверки)
bot.command("courses", (ctx) => {
  ctx.reply("📚 Доступные направления:\n1. Программирование\n2. Дизайн\n3. Маркетинг");
});

// Запуск бота
bot.launch();
console.log("✅ Telegram бот запущен!");

// Express для WebApp
app.get("/", (req, res) => {
  res.send("🌍 AcademyCG WebApp подключен к Telegram Bot!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Сервер запущен на порту ${PORT}`));
