const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const botConfig = require("../botconfig.json");
module.exports.run = async(bot, message, args) =>{
  
//     try{
        
//     var textt = "**toms bot** \n\n **_commands_** \n !hallo - geeft hallo terug. \n !doei - geeft doei terug. \n !info - Geeft info \n !serverinfo - geef server info \n !drops - geeft een random drop aan voor fn \n !ticket - maak een ticket. ";

//     message.author.send(textt);

//     message.reply("alle command staan in je prive berichten📫👍.");  


//     }catch(error){
//         message.reply("Er is iets misgeaan");
//     

   var commandlist = [];
   var prefix = botConfig.prefix;

   console.log(client.commands)
   .forEach(command => {

    var constructor = {
      name: command.help.name,
      description: command.help.description,
      category: command.help.category
    }
 
    commandlist.push(constructor);
     
   });


   var response = "**toms bot**\n\n";
   var general = "**algemeen**\n";
   var infomatie = "\n**infomatie**\n";
  //  var admin = "**\n_ADMIN COMMANds_**\n";

   for (let i = 0; i < commandlist.length; i++) {
     const command = commandlist[i];
     
     if(command["category"] == "algemeen"){

      general +=`${prefix}${command["name"]} - ${command["description"]}\n`;


     }else if(command["category"] == "infomatie"){

      infomatie +=`${prefix}${command["name"]} - ${command["description"]}\n`;

     }
   response += general;
   response += infomatie;
  //  response += admin

   message.author.send(response).then(() => {
     message.channel.send("alle commands staan in je prive bericht :mailbox_with_mail:");
   }).catch(() => {
    message.channel.send("je prive berichten staan uit! zet het aan!");   
   });
}
}



module.exports.help ={
  name: "help",
  description: "geeft help",
  category: "infomatie"
}