const discord = require("discord.js");

exports.run = async (client, msg, args) => {
let idenem = new discord.MessageEmbed()
.setTitle("D.js v13 deneme")
.setDescription(`Merhaba arkadaşım v13 mü deniyon?`)
msg.channel.send({embeds: [idenem]})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  }
  exports.help = {
      name: "v13"
  }