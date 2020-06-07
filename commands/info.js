const discord = require("discord.js")
module.exports.run = async(bot, message, args) =>{
    var botEmbed = new discord.MessageEmbed()
        .setTitle('info')
        .setDescription(`**je avater is:** ${(message.author.displayAvatarURL())}`)
        .setColor("#0099ff")
        // .addField("Bot naam", client.user.username)

        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setImage()
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    // Terug sturen van het bericht
    return message.channel.send(botEmbed);
}


module.exports.help ={
  name: "info",
  description: "geeft info van jou",
  category: "infomatie"
}