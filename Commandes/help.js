const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・List of commands.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/SOUKii')
	.setThumbnail(config.Image)
	.addFields(
    { name: '📃-help', value: '(Show bot functionality.)' },
    { name: '🔗-link', value: '(To see the links about me.)' },
    { name: '⛺️-pdp', value: '(Display his profile picture.)' },
    { name: '📈-crea', value: '(See the date of creation of his discord account.)' },
    { name: '⛅️-weather', value: '(To display the weather.)' },
    { name: '🎁-giveaway', value: '(To make a giveaway.)' },
    { name: '📣-survey', value: '(To do a survey.)' },
    { name: '🤖-ibot', value: '(Information about the bot.)' }, 
    { name: '📦-modo', value: '(List of moderation commands.)' },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}