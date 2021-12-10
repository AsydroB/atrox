const Discord = require("discord.js")
module.exports = {
    name: "dilekce",
    description: "Sunucu ile ilgili istek ve önerileri bildirmenize yarar.",
        option: {
            string: {
              name: "metin",
              description: "İsteğin & Önerin",
              required: true
            }
        },


          async execute(interaction, client,) {
            var neden = interaction.options.getString("metin")
            interaction.reply("Durumu yetkililere bildirdim.")
            
  
  

              client.channels.cache.get("918847625204232222").send({
                content: `${neden}`}).then(a => {
                  a.react("👍🏻"); 
                  a.react('👎🏻');
                  })


             

        },


        
      };
