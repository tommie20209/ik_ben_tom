const discord = require("discord.js");
const client = new discord.Client();
const botConfig = require("../botconfig.json");
module.exports.run = async(bot, message, args) =>{
  var commandsList = [];

  bot.commands.forEach(command => {

      var item = {

          name: command.help.name,
          description: command.help.description,
          category: command.help.category

      }

      commandsList.push(item);

  });

  // console.log(commandsList);

  var prefix = botConfig.prefix;
  var response = "algemeen";
  var infomatie = "\n**infomatie**\n";

  for (var i = 0; i < commandsList.length; i++) {
    
    if(command["category"] == "algemeen"){
      response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \n\n`;
    
    }else if(command["category"] == "infomatie"){
 
      infomatie +=`${prefix}${command["name"]} - ${command["description"]}\n`;
    } 
    response += general;
   response += infomatie;
  

  message.author.send(response).then(() => {

      message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");

  }).catch(() => {

      message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");

    });
  }}
  
   
   
  module.exports.help ={
    name: "help",
    description: "geeft help",
    category: "infomatie"
  }