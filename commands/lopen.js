const discord = require("discord.js");
module.exports.run = async(bot, message, args) =>{

    var lopen = ["1", "2", "3", "4", "5"];
    var result = options[Math.floor(Math.random() * lopen.length)];
    
    message.channel.send(result);
 }
  
  module.exports.help ={
    name: "loop",
    description: "geeft hallo",
    category: "algemeen"
  }