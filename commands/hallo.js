const discord = require("discord.js");
module.exports.run = async(bot, message, args) =>{

    return message.channel.send("hallo!");
  
  }
  
  module.exports.help ={
    name: "hallo",
    description: "geeft hallo",
    category: "algemeen"
  }