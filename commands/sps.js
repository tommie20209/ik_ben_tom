const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //sps speen, papier, schaar  

    if (!args[0]) return message.reply("gebruik sps <steen, papier, schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(math.random() * options.length)];

    if(args[0].toUpperCase() == "STEEN"){

        if(result == "papier"){

            return message.channel.send(`ik heb ${result} :notepad_spiral:, ik win`);

        }else if(result == "schaar"){

            return message.channel.send(`ik heb ${result} :scissors:, jij wint`);

        }else if(result == "steen"){

            return message.channel.send(`ik heb ${result} :moyai:, het is gelijkspel`);

        }
    }

}

module.exports.help = {
    name: "sps",
    description: "steen, papier schaar tegen de bot",
    category: "algemeen"
}