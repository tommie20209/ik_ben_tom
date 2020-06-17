const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    var testembed = new discord.MessageEmbed()
        .setTitle("test")
        .addFields(
            { name: "test", value: message.author.username}
        )
     return message.channel.send(testembed);
}

module.exports.help = {
    name: "test",
    description: "geeft test",
    category: "algemeen"
}