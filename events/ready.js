const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
console.log ("Bot başarıyla aktifleşti.");
  },
};