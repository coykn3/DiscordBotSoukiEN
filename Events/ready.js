const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix;
var speudo = config.speudo;

module.exports = async (client, message) => {
    console.log(`${client.user.username} is online !`);

    setInterval(function() {
        let statusstyle = [
            `${prefix}help`,
            `I love ${config.speudo}`
        ]
        
        let status = statusstyle[Math.floor(Math.random() * statusstyle.length)];
        client.user.setPresence({ activity: { name: status}, status: 'online' })
    }, 5000)
};