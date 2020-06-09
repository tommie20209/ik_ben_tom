const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    const discord = require("discord.js");

    // const args = message.content.slice(prefix.length).split(/ +/);

   if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

   if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

   if (!args[1]) return message.reply("Geen gebruiker opgegeven.");

   if (!args[2]) return message.reply("Gelieve een redenen op te geven.");

   var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

   var reason = args.slice(1).join(" ");

   if (!banUser) return message.reply("Kan de gebruiker niet vinden.");
   var embed = new discord.MessageEmbed()
       .setColor("#ff0000")
       .setThumbnail(banUser.user.displayAvatarURL)
       .setFooter(message.member.displayName, message.author.displayAvatarURL)
       .setTimestamp()
       .setDescription(`** Geband:** ${banUser} (${banUser.id})
       **Geband door:** ${message.author}
       **Redenen: ** ${reason}`);

   var embedPrompt = new discord.MessageEmbed()
       .setColor("GREEN")
       .setAuthor("Gelieve te reageren binnen 30 sec.")
       .setDescription(`Wil je ${banUser} bannen?`);


   message.channel.send(embedPrompt).then(async msg => {

       var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


       message.channel.awaitMessages(m => m.author.id == message.author.id,
       { max: 1, time: 30000 }).then(collected => {
       if (collected.first().content.toLowerCase() == 'yes') {
                   message.reply('Kick speler.');
               }
               else
                   message.reply('Geanuleerd');

           }).catch(() => {
               message.reply('Geen antwoord na 30 sec, geanuleerd.');
           });


       if (emoji === "✅") {

           msg.delete();


           banUser.ban(reason).catch(err => {
               if (err) return message.channel.send(`Er is iets foutgegaan.`);
           });

           message.reply(embed);

       } else if (emoji === "❌") {

           msg.delete();

           message.reply("Ban geanuleerd").then(m => m.delete(5000));

   }
}


   )}; 

async function promptMessage(message, author, time, reactions) {
time *= 1000;


for (const reaction of reactions) {
   await message.react(reaction);
}

const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help ={
  name: "ban",
  description: "ban een speler",
  category: "algemeen"
}   