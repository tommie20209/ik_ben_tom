const discord = require("discord.js");
const client = new discord.Client();

module.exports.run = async(bot, message, args) =>{
  const user = message.mentions.users.first() || message.author;
    var serverEmbed = new discord.MessageEmbed()
    .setDescription("Zet de beschrijving")
    .setColor("#kleur")
    //  .addField("Bot naam", client.user.Username)
    .addField("Je bent deze server gejoind op", message.member.joinedAt)
    .addField("Totaal memebers", message.guild.memberCount)
    .setThumbnail(user.avatarURL);
  return message.channel.send(serverEmbed);
  }
  module.exports.help ={
    name: "sinfo",
    description: "geeft serverinfo",
    category: "infomatie"
  }