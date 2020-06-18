const discord = require("discord.js");
const botConfig = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {
  var commandlist = [];

  bot.commands.forEach(command => {

    var item = {

      name: command.help.name,
      description: command.help.description,
      category: command.help.category

    }

    commandlist.push(item);

  });

  var commandlist;
  var prefix = botConfig.prefix;
  var response = "";


  for (var i = 0; i < commandlist.length; i++) {
    const command = commandlist[i];  
    if(command["category"] == "algemeen"){
      general += `${prefix}${command["name"]} - ${command["description"]}\n`;


    } else if (command["category"] == "infomatie") {

      infomatie += `${prefix}${command["name"]} - ${command["description"]}\n`;




    } 
  }


  response += general;
  response += infomatie;

  message.author.send(response).then(() => {

    message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");

  }).catch(() => {

    message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");

  });

}

module.exports.help = {
  name: "help"
}