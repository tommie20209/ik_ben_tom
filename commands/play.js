const discord = require("discord.js");
const ytdl = require("ytdl-core");
module.exports.run = async (bot, message, args) => {

  if (!message.member.voice.channel) return message.reply("connecteer met een spaak kannaal");

  if (message.guild.me.voice.channel) return message.channel.send("de bot is al verbonden spaak kannaal");

  if (!args[0]) return message.reply("geef een url mee van youtube");

  var validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send("geef een **juiste** url mee");

  var info = await ytdl.getInfo(args[0]);

  var options = { seek: 3, volume: 1 };

  var channelJoin = message.member.voice.channel.join()
    .then(voiceChannel => {


      var stream = ytdl(args[0], { filtr: `audioonly` });
      var dispatcher = voiceChannel.play(stream, options);


    }).catch(console.error);

  message.channel.send(`Nu aan het spelen ${info.title}`);


  
}

module.exports.help = {
  name: "play",
  description: "laat muziek spelen",
  category: "algemeen"
}