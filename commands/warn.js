const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnigs.json", "utf8"));

module.exports.run = async(bot, message, args) =>{

   if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

   if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

   if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

   if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

   var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

   var reason = args.slice(1).join(" ");

   if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

   if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("kan daze gebruiker niet warnen vanwege dat hij specaile perms heeft.");

   if(!warns[warnUser.id]) warns[warnUser.id] = {
       warns: 0
   };
   
   
   warns[warnUser.id].warns++;

   fs.writeFile("./warings.json",  JSON.stringify(warns), (err) =>{
        if (err) console.log(err);
   });

   var embed = new discord.MessageEmbed()
       .setColor("#ff0000")
       .setFooter(message.member.displayName, message.author.displayAvatarURL)
       .setTimestamp()
       .setDescription(`** Gewarnd:** ${warnUser} (${warnUser.id})
       **Gewarnd door:** ${message.author}
       **Redenen: ** ${reason}`)
       .addField("aantal warns", warns[warnUser.id].warns);
       
       var channel = message.guild.channels.cache.find(ch => ch.name === 'logs');

   if(!channel) return;

   channel.send(embed);

}

module.exports.help ={
  name: "warn"
}