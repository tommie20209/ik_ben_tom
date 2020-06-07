const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    const categoryID = "700803609029247017";

    var userName = message.author.username;
    var userDiscriminatoor = message.author.discriminator;

    var ticketBestaat = false;


    message.guild.channels.cache.forEach(channel => {
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminatoor) {
            ticketBestaat = true;

            message.reply("je hebt al een ticket gemaakt");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("hoi" + message.author.username)
        .setFooter("ticket wordt gemaakt");

    message.channel.send(embed);


    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminatoor, { type: "text" }).then(
        (createdchannel) => {
            createdchannel.setParent(categoryID).then(
                (setedparent) => {

                    setedparent.updateOverwrite(message.guild.roles.cache.find(r => r.name == "welkom"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    
                    setedparent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });

                    var embedtt = new discord.MessageEmbed()
                        .setTitle(`hoi ${message.author.username}`);
                    setedparent.send(embedtt);
                }
            ).catch(err => {
                message.channel.send("er is misgegaan");
            });
        }
    ).catch(err => {
        message.channel.send("er is misgegaan");
    });

}

module.exports.help = {
    name: "ticket",
    description: "maak een ticket",
    category: "algemeen"
}