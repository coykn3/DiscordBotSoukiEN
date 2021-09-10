const Discord = require("discord.js");
const weather = require("weather-js");
const config = require("../config.json");
var prefix = config.prefix;

module.exports.run = (client, message, args) => {
    message.delete()

    weather.find({ search: args.join(" "), degreeType: "C" }, function (
        error,
        result
      ) {
          try {
          if (!result) {
            message.channel.send(
              "**Please provide me with a valid location.**"
            );
            return;
          }
          if (error) message.channel.send(error);
    
          const current = result[0].current;
          if (!current) return message.channel.send("**Please provide me with a valid location.**");
          let frTemps;
          switch (current.skytext) {
            case "Sunny":
              frTemps = "Sunny";
              break;
            case "Clear":
              frTemps = "Clear";
              break;
            case "Mostly Clear":
              frTemps = "Mostly Clear"
              break;
            case "Partly Clear":
              frTemps = "Partly Clear"
              break;
            case "Mostly Sunny":
              frTemps = "Mostly Sunny";
              break;
            case "Cloudy":
              frTemps = "Cloudy";
              break;
            case "Mostly Cloudy":
              frTemps = "Mostly Cloudy";
              break;
            case "Partly Cloudy":
              frTemps = "Partly Cloudy";
              break;
            case "Partly Sunny":
              frTemps = "Partly Sunny";
              break;
            case "Blowing Dust":
              frTemps = "Blowing Dust";
              break;
            case "Light Rain":
              frTemps = "Light Rain";
              break;
            case "Haze":
              frTemps = "Haze";
              break;
            case "Smoke":
              frTemps = "Smoke";
              break;
            case "Fair": 
              frTemps = "Fair";
              break;
            case "Snow":
              frTemps = "Snow";
              break;
            case "Hail":
              frTemps = "Hail";
              break;
            case "Rain Showers":
              frTemps = "Rain Showers";
              break;
            case "Rain":
              frTemps = "Rain";
              break;
            
          }
    
          let vitesse = current.winddisplay.substring(0, current.winddisplay.indexOf("h") + 1);
          let Dir;
          switch (current.winddisplay.substring(current.winddisplay.indexOf("h") + 2)) {
            case "Northeast":
              Dir = "Northeast";
              break;
            case "Southeast":
              Dir = "Southeast";
              break;
            case "Southwest":
              Dir = "Southwest";
              break;
            case "Northwest":
              Dir = "Northwest";
              break;
            case "North":
              Dir = "North";
              break;
            case "South":
              Dir = "South";
              break;
            case "East":
              Dir = "East";
              break;
            case "West":
              Dir = "West";
              break;
            default:
              Dir = "No wind";
              break;
          }
    
          const météoEmbed = new Discord.MessageEmbed()
            .setDescription(`**${frTemps}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(
              `${
                message.guild.me.displayHexColor !== "#00000"
                  ? message.guild.me.displayHexColor
                  : 0xffffff
              }`
            )
            .addField("Time zone", `UTC${result[0].location.timezone}`, true)
            .addField("Temperature", `${current.temperature} Degrés`, true)
            .addField("Feeling", `${current.feelslike} Degrés`, true)
            .addField("Wind speed :", vitesse, true)
            .addField("Wind direction :", Dir, true)
            .addField("Humidity", `${current.humidity}%`, true);
          message.channel.send(météoEmbed);
        }catch {
          message.channel.send("**Please provide me with a valid location.**")
        }})
};
module.exports.help = {
    name: 'weather'
};