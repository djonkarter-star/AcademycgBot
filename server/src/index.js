
// server/src/index.js
require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const courses = require("./data");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Привет! 👋 Выберите направление:", 
    Markup.keyboard(Object.keys(courses)).resize()
  );
});

bot.hears(Object.keys(courses), (ctx) => {
  const direction = ctx.message.text;
  const courseList = Object.keys(courses[direction]);

  ctx.session = { direction };
  ctx.reply(`Вы выбрали направление: *${direction}* \nТеперь выберите курс:`,
    Markup.keyboard(courseList).resize()
  );
});

bot.hears(/Курс/, (ctx) => {
  const { direction } = ctx.session || {};
  if (!direction) return ctx.reply("Сначала выберите направление!");

  const course = ctx.message.text;
  const lessons = courses[direction][course];

  ctx.session.course = course;
  ctx.reply(`Курс: *${course}* \nВыберите урок:`,
    Markup.keyboard(lessons).resize()
  );
});

bot.hears(/Урок/, (ctx) => {
  ctx.reply(`🔒 Этот урок пока доступен только по подписке.\nСкоро подключим оплату через Юкассу 💳`);
});

bot.launch();
console.log("Бот запущен 🚀");
