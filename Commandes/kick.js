const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()
    var user = message.mentions.users.first();
    var reason = args.join(" ").slice(22);

    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {return message.channel.send("You do not have permission to make this order !"); }
    if(!user) {const fail = await message.channel.send("You did not mention the person to kick"); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send("You did not do the reason"); wait(3000); fail.delete(); return}

    const kickchannel = new Discord.MessageEmbed()
    .setAuthor('User was kicked', 'https://cdn.discordapp.com/attachments/721621182285348884/722839199690129458/Tryade_Termine_BD.png')
    .setColor(config.embedColor)
    .addField('Reason', `${reason}`, true)
    .setFooter(`Kick by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(kickchannel)

    message.guild.member(user).kick(reason)
};

module.exports.help = {
    name: 'kick'
};