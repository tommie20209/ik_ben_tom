const discord = require("discord.js");
const botConfig = require("../botconfig.json")

module.exports.run = async(bot, message, args) =>{

    var prefix = botConfig.prefix;

    var args = message.content.slice(prefix.length).split(/ +/);

    var drops = ["the shark","risky reels", "SALTY SPRINGS"];

    let randomDrop = drops[Math.floor(Math.random()*drops.length)];
    
   return message.channel.send(randomDrops)


}

module.exports.help ={
  name: "drops"
}