const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {


    //!rieview aantalsterren tekst

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 5) return message.reply("geef een aantal sterren op tussen de 1 en 5");

    var text = args.splice(1, args.lenght).join(" ") || `**geen tekst opgegeven**`;

    var channel = message.member.guild.channels.cache.find(channel => channel.name === "rieviews");

    if (!channel) return message.channel.send(`${channel} niet gevonden`);

    var stars = "";
    for (let i = 0; i < amountStars.length; i++) {

        stars += ":star";

    }

    message.delete();

    const embed = new discord.MessageEmbed()
    .setTitle(`${message.author.username} heeft een rieview geschreven.`)
    .setColor("RED")
    .addField("sterren: ", stars)
    addField("Rieview: ", text);

    message.channel.send("✅ je rieview is succesvol geschreven");

    return channel.send(embed)


}

module.exports.help = {
    name: "rieview",
    description: "geeft een rieview",
    category: "algemeen"
}