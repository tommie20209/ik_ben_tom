const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    const categoryID = "700803609029247017";

    var userName = message.author.username;
    var userDiscriminatoor = message.author.discriminator;

    var ticketBestaat = false;


    message.guild.channels.cache.forEach(element => {
        if (channel.name == userName.tolowerCase() + "-" + userDiscriminatoor) {
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


    message.guild.channels.create(username.tolowerCase() + "-" + userDiscriminatoor, { type: "text" }).then(
        (createdchannel) => {
            createdchannel.setParent(categoryID).then(
                (setedparent) => {

                    setedparent.updateOverwrite(message.guild.roles.cache.find(r => r.name == `@welkom`), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    setedparent.updateOverwrite(message.guild.roles.cache.find(r => r.name == `@everyone`), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    setedparent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL:true,
                        READ_MESSAGES_HISTORY: true,
                        CREATE_INSTANT_INVITE: false,
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
    name: "ticket"
}