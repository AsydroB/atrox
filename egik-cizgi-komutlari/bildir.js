const Discord = require("discord.js")
module.exports = {
    name: "bildir",
    description: "Sunucuda bulduğnuz bug veya hataları bildirsiniz.",
        option: {
            string: {
              name: "metin",
              description: "Bulduğunuz hata & bug",
              required: true
            }
        },


          async execute(interaction, client,) {
            var neden = interaction.options.getString("metin")
            interaction.reply("Durumu yetkililere bildirdim.")
            
  
  

              client.channels.cache.get("918854904867590165").send({
                content: `**Yeni Bug & Hata** \n\n**Mesajı atan** : <@${interaction.member.id}> \n **Mesaj :** ${neden} `})



             

        },


        
      };
