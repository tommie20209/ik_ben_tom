module.exports.run = async(bot, message, args) =>{

    const categoryID = "700803609029247017";

    if(message.channel.parentID == categoryID){
        message.channel.delete();
    }else {
        message.channel.send("doe dit in de ticket");
    }

  
  }
  
  module.exports.help ={
    name: "close"
  }