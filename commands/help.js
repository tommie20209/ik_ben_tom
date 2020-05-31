module.exports.run = async(bot, message, args) =>{
  fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "help.name");

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
    try{
        
    var textt = "**toms bot** \n\n **_commands_** \n !hallo - geeft hallo terug. \n !doei - geeft doei terug. \n !info - Geeft info \n !serverinfo - geef server info. \n\n\n **_admin commands_** \n !ban - om iemand te bannen \n !kick - kick iemand";

    message.author.send(textt);

    message.reply("alle command staan in je prive berichten📫👍.");  


    }catch(error){
        message.reply("Er is iets misgeaan");
    }
}

module.exports.help ={
  name: "help"
}