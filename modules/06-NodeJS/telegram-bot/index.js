// Import necessary modules
const express = require('express');
const { Telegraf } = require('telegraf');
const { generaCuentos } = require('./openai');

// Load environment variables
require('dotenv').config();

// Initialize Express app and middleware
const app = express();
app.use(express.json());

// Initialize Telegram bot with token from environment variables
const bot = new Telegraf(process.env.BOT_TOKEN);

// Set up bot webhook
app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);

// Define a basic endpoint for testing
app.post('/telegram-bot', (req, res) => res.send('All OK'));

// Add your bot commands below in this section
// Example: bot.command('start', ctx => ctx.reply('Welcome!'));

bot.command('test', (ctx) => {
    console.log(ctx.message);
    ctx.reply('El bot funciona!');
});

bot.command('dice', async (ctx) => {
    const diceMessage = await ctx.replyWithDice();
    console.log(diceMessage);
});

bot.command('test', (ctx) => {
    ctx.reply('El bot funciona!');
});

bot.command('sayhi', (ctx) => {
    const username = ctx.from.username || 'No username set';
    ctx.reply(`Hi ${username}!`);
});

// /cuento personajes|localizacion|accion
// /cuento pikachu, espinete|castillo|robando la corona
bot.command('cuento', async (ctx) => {
    console.log(ctx.message);

    const datos = ctx.message.text.substring(8).trim().split('|');
    console.log(datos);

    const [historia, imagen] = await generaCuentos(datos);

    await ctx.reply(historia);
    await ctx.replyWithPhoto(imagen);
});

bot.on('message', (ctx) => {
    ctx.reply('Me has dicho: ' + ctx.message.text);
});

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
