const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {


  //!giveaway aantalspeler tijd berichtjeTekst

  var item = "";
  var time;
  var winaarcount;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("srry jij kan dit niet");

 
  winaarcount = args[0]
  time = args[1]
  item = args.splice(2, args.length).join(" ");

  if (!winaarcount) return message.reply("geen aantal spelers opgeven");
  if (!time) return message.reply("geen tijd opgeven");
  if (!item) return message.reply("geen winnaars item opgeven");

  message.delete();

  var date = new Date().getTime();
  var dateend = new Date(date + (time * 1000));

  var giveawayembed = new discord.MessageEmbed()
    .setTitle("🎉 **giveaway** 🎉")
    .setFooter(`verval ${dateend}`)
    .setDescription(item);

  var embedsend = await message.channel.send(giveawayembed);
  embedsend.react("🎉");

  setTimeout(function () {

    var random = 0;
    var winnars = [];
    var inList = false;

    var peopleReacted = embedsend.reactions.cache.get("🎉").users.cache.array();

    for (let i = 0; i < peopleReacted.length; i++) {

      if (peopleReacted[1].id == client.user.id) {
        peopleReacted.splice(i, 1);
        continue;
      }

    }

    if (peopleReacted.length == 0) {
      return message.channel.send("Niemand heeft gewonnen dus de bot wint.");
    }

    if (peopleReacted.length < winaarcount) {
      return message.channel.send("Er zijn te weinig mensen die mee deden daarom heeft de bot gewonnen");
    }

    for (let y = 0; y < array.length; y++) {

      inList = false;

      random = Math.floor(Math.random() * peopleReacted.length);

      for (let o = 0; o < winnars.length; o++) {

        if (winnars[o] == peopleReacted[random]) {
          inList = true;
          y--;
          break;
        }

      }

      if (!inList) {
        winnars.push(peopleReacted[random]);
      }

    }

    for (let y = 0; y < winnars.length; y++) {

      message.channel.send("Proficiat: " + winnars[y].username + `je hebt gewonnen ${item}`);
    }

    
  }, time * 1000)


}

module.exports.help = {
  name: "giveaway",
  description: "maak een giveaway",
  category: "algemeen"
}