const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Here are the links about me.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/SOUKii')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'Youtube', value: config.Youtube },
    { name: 'Twitch', value: config.Twitch },
    { name: 'Twitter', value: config.Twitter },
    { name: 'Tiktok', value: config.Tiktok },
    { name: 'Instagram', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"link"
}