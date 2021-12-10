const Discord = require("discord.js")
module.exports = {
    name: "emergency",
    description: "Acil durumlarda yetkililere ulaşmak için kullanınız.",
        option: {
            string: {
              name: "sebep",
              description: "Belirtmek istediğin sebep",
              required: true
            }
        },


          async execute(interaction, client, args ) {

            var neden = interaction.options.getString("sebep")
            if(!interaction.member.roles.cache.has("918845460456824902")){

              interaction.reply("Bu komudu kullanmak için **5 Level** olmalısın.")
              
            }else{
             
              interaction.reply("Durumu yetkililere bildirdim.")

              client.channels.cache.get("918854883514396722").send({
                content: `<@&918940359160102932> \n **!! ACİL DURUM !!**\n\n **Mesajı atan** <@${interaction.member.id}> \n **Mesaj :** ${neden} `})
    
            }


          

            



           



          
        },


        
      };
