const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
    })
});


client.on("guildMemberAdd", newMember => {
    var role = newMember.guild.roles.cache.find(ro => ro.name == "welkom");
    var welkom = newMember.guild.channels.cache.find(ch => ch.name == "regels");
    var channel = newMember.guild.channels.cache.find(ch => ch.name == "『👋🏻』welkom");
    channel.send(`${newMember} lees de **${welkom} goed door!**`);
    newMember.roles.add(role.id);
});

client.on("guildMemberRemove", doeimember => {
    var channel = doeimember.guild.channels.cache.find(dca => dca.name == "👋doei");
    var role = doeimember.guild.roles.cache.find(ro => ro.name == "welkom");
    channel.send(`${doeimember} heeft de server verlaten`);
})


client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("fortnite", { type: "PLAYING" });

});

// var swearwords = ["koe", "kalf", "varken"];
client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var swearwords = JSON.parse(fs.readFileSync("./data/swearwords.json"));

    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearwords["vloekwoorden"].length; i++) {

        if (msg.includes(swearwords["vloekwoorden"][i])) {
            message.delete();

            return (message.reply("gelieve niet te schelden/vloeken"));
        }
    }

    var prefix = botConfig.prefix;

    var args = message.content.slice(prefix.length).split(/ +/);

    var messageArray = message.content.split(" ");

    var command = messageArray[0];
    if (!message.content.startsWith(prefix)) return;

    var args = messageArray.slice(1);
    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);

    if (command === `${prefix}info`) {
        // Embed wat we gaan laten tonen.
        //     var botEmbed = new discord.MessageEmbed()
        //         .setTitle('titel')
        //         .setDescription("Zet de beschrijving")
        //         .setColor("#0099ff")
        //         .addField("Bot naam", client.user.username)

        //         .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        //         .setImage('https://i.imgur.com/wSTFkRM.png')
        //         .setTimestamp()
        //         .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        //     // Terug sturen van het bericht
        //     return message.channel.send(botEmbed);
        // }

        // .addFields(
        //     {name:"Bot naam",value: bot.user.username},
        //     {name:"Bot naam",value: bot.user.username}

    }

    if (command === `${prefix}serverinfo`) {

        // var serverEmbed = new discord.MessageEmbed()
        //     .setDescription("Zet de beschrijving")
        //     .setColor("#kleur")
        //     .addField("Bot naam", client.user.username)
        //     .addField("Je bent deze server gejoind op", message.member.joinedAt)
        //     .addField("Totaal memebers", message.guild.memberCount);

        // return message.channel.send(serverEmbed);
    }
    if (command === `${prefix}kick`) {


    }


    if (command === `${prefix}ban`) {
        // const discord = require("discord.js");

        //      const args = message.content.slice(prefix.length).split(/ +/);

        //     if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

        //     if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

        //     if (!args[1]) return message.reply("Geen gebruiker opgegeven.");

        //     if (!args[2]) return message.reply("Gelieve een redenen op te geven.");

        //     var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        //     var reason = args.slice(1).join(" ");

        //     if (!banUser) return message.reply("Kan de gebruiker niet vinden.");
        //     var embed = new discord.MessageEmbed()
        //         .setColor("#ff0000")
        //         .setThumbnail(banUser.user.displayAvatarURL)
        //         .setFooter(message.member.displayName, message.author.displayAvatarURL)
        //         .setTimestamp()
        //         .setDescription(`** Geband:** ${banUser} (${banUser.id})
        //         **Geband door:** ${message.author}
        //         **Redenen: ** ${reason}`);

        //     var embedPrompt = new discord.MessageEmbed()
        //         .setColor("GREEN")
        //         .setAuthor("Gelieve te reageren binnen 30 sec.")
        //         .setDescription(`Wil je ${banUser} bannen?`);


        //     message.channel.send(embedPrompt).then(async msg => {

        //         var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


        //         message.channel.awaitMessages(m => m.author.id == message.author.id,
        //         { max: 1, time: 30000 }).then(collected => {
        //         if (collected.first().content.toLowerCase() == 'yes') {
        //                     message.reply('Kick speler.');
        //                 }
        //                 else
        //                     message.reply('Geanuleerd');

        //             }).catch(() => {
        //                 message.reply('Geen antwoord na 30 sec, geanuleerd.');
        //             });


        //         if (emoji === "✅") {

        //             msg.delete();


        //             banUser.ban(reason).catch(err => {
        //                 if (err) return message.channel.send(`Er is iets foutgegaan.`);
        //             });

        //             message.reply(embed);

        //         } else if (emoji === "❌") {

        //             msg.delete();

        //             message.reply("Ban geanuleerd").then(m => m.delete(5000));

        //     }
        // }


        //     )}; 

        // async function promptMessage(message, author, time, reactions) {
        // time *= 1000;


        // for (const reaction of reactions) {
        //     await message.react(reaction);
        // }

        // const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        // return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }
});
client.login(process.env.BOT_TOKEN);