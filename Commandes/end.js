const ms = require('ms');

const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You must have the following permission: `MANAGE_MESSAGES`. ');
    }

    let messageID = args[0];
    if(!messageID){
        return message.channel.send(':x: You must put a message id!');
    }

    try {
        client.giveawaysManager.edit(messageID, {
            setEndTimestamp: Date.now()
        });
        message.channel.send('The giveaway will turn off in'+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    } catch (error) {
        if(error.startsWith(`No giveaway found with the following id : ${messageID}.`)){
            message.channel.send('I can\'t find a giveaway with the following id : '+messageID);
        }
        if(err.startsWith(`The giveaway with the identifier : ${messageID} is already finished.`)){
            message.channel.send('The giveaway is already over !');
        }
    }

};

module.exports.help = {
  name: "end"
}
