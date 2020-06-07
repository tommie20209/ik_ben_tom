const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {


    // !annoutment titile | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
    message.delete();

    var seperator = "|";

    if (args[0] == null) {
        var embed = new discord.MessageEmbed()
            .setTitle("gebruik")
            .setColor("BLUE")
            .setDescription(`maak een annoutment met:\n !annoutment title ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);


        return message.reply(embed);

    }

    var argslist = args.join(" ").split(seperator);

    if (argslist[2] === undefined) argslist[2] = "RED";
    if (argslist[3] === undefined) argslist[3] = "algemeen";

    var options = {

        titile: argslist[0],
        bericht: argslist[1] || "geen inhoud",
        kleur: argslist[2].trim(),
        kanaal: argslist[3].trim()
    }


    var annoutmentEmbed = new discord.MessageEmbed()
        .setTitle("annoutment")
        .setColor(options.kleur)
        .setDescription(`bericht van ${message.author} \n\n ${options.titile} \n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channel => channel.name == options.kanaal);
    if(!channel) return message.reply("channel bestaat niet");

    channel.send(annoutmentEmbed);

}

module.exports.help = {
    name: "annoutment",
    description: "geef een bericht wat er gaat geberen in kleur!",
    category: "algemeen"
}