const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    const si = require('systeminformation');
    si.cpu()
        .then(data => {
            console.log('Embed CPU sent');
            const cpuEmbed =  new Discord.MessageEmbed()
            .setColor("#82BCC1 ")
            .setAuthor('CPU Information 📜', message.author.displayAvatarURL, message.author.displayAvatarURL)
            .addFields(
                { name: 'CPU 🖥', value: `${data.manufacturer} ` + `${data.brand}`, inline: true },
                { name: 'Socket 🖥', value: data.socket, inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .addFields(
                { name: 'Processor speed 🖥', value: data.speed, inline: true },
                { name: 'Number of hearts 🖥', value: data.physicalCores, inline: true },
                { name: 'Number of Threads 🖥', value: data.cores, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author, message.author.displayAvatarURL);
            return message.channel.send(cpuEmbed);
        })
    }
module.exports.help = {
    name: "infocpu"
}