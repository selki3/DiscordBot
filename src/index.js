const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env file

// Intents are a set of permissions that bots use
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Read the token from the environment variables
const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error('Error: DISCORD_TOKEN is not set in the .env file');
  process.exit();
}

client.login(token)
  .then(() => {
    console.log('Bot is logged in successfully!');
  })
  .catch((error) => {
    console.error('Failed to log in:', error.message);
  });

client.on('ready', () => { 
  console.log('Bot is ready');
});

client.on('messageCreate', (msg) => { 
  if (msg.content.includes('meow') && !msg.author.bot) {
    msg.reply('meow');
  }
});
