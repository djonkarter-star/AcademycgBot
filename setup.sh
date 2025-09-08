#!/bin/bash
# Скрипт автоматической установки и запуска бота

echo "🚀 Установка зависимостей..."
npm install

echo "📦 Запуск через pm2..."
pm2 start index.js --name telegram-bot
pm2 save
pm2 startup
