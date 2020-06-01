const discord = require("discord.js");
module.exports.run = async(bot, message, args) =>{

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return;

    var helptext = "**_admin commands_** \n !ban - om iemand te bannen \n !kick - kick iemand \n !tempmute - mute een speler voor een bebaalde tijd";

    message.author.send(helptext);
  }
  
  module.exports.help ={
    name: "ahelp"
  }