const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

module.exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('You do not have the permissions!'); }
    if (!args[0]) { return message.channel.send('You must specify a number of messages to delete!'); }
    else if (isNaN(args[0])) { return message.channel.send('Please specify a number!'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**🗑 | **${messages.size}** messages have been deleted!**`);
              });
};

module.exports.help = {
    name: 'clear'
};