﻿const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Bot information !')
      .setURL('https://www.youtube.com/c/SOUKii')
      .setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/SOUKii')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Creation :', value: '13/04/2021', inline: true },
          { name: '⌨ | Developer :', value: '!Souki.#0303', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} servers`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}