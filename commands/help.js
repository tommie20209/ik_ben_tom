module.exports.run = async(bot, message, args) =>{
  
    try{
        
    var textt = "**toms bot** \n\n **_commands_** \n !hallo - geeft hallo terug. \n !doei - geeft doei terug. \n !info - Geeft info \n !serverinfo - geef server info \n !drops - geeft een random drop aan voor fn \n !ticket - maak een ticket. ";

    message.author.send(textt);

    message.reply("alle command staan in je prive berichten📫👍.");  


    }catch(error){
        message.reply("Er is iets misgeaan");
    }
}

module.exports.help ={
  name: "help"
}