module.exports = {
    name: "ping",
    description: "Botun pingini gösterir",
    async execute(interaction, client) {
      await interaction.reply({ content: "<:ping:918598586541940796> **Ping Ölçülüyor...**" });
      const message = await interaction.fetchReply();
      var ping = message.createdTimestamp - interaction.createdTimestamp;
      await message.edit(`
          <:ping:918598586541940796> Pingim **${ping}**
          `);
    },
  };