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

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {return message.channel.send("You do not have permission to make this command!"); }
    if(!user) {const fail = await message.channel.send("You did not mention the person to be banned"); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send("You did not do the reason"); wait(3000); fail.delete(); return}

    const kickchannel = new Discord.MessageEmbed()
    .setAuthor('The user has been Ban', 'https://emoji.gg/assets/emoji/8501_BanHam.png')
    .setColor(config.embedColor)
    .addField('Reason', `${reason}`, true)
    .setFooter(`Banned by ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(kickchannel)

    message.guild.member(user).ban(reason)
};

module.exports.help = {
    name: 'ban'
};