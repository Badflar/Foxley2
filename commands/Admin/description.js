const Discord = require("discord.js"); 
var DatabaseHanlder = require('../../handlers/database');

module.exports = {
    config: {
        name: "description",
        aliases: ["desc", "serverdesc"],
        usage: "{description}",
        category: "Bot",
        description: "Set a server desciption. (Helps Foxley know what kind of servers he watches).",
        accessableby: "SERVER OWNER"
    },
    run: async (bot, message, args) => {
        if (message.author.id != message.guild.owner.id) return message.channel.send("This command is only available for the server owner!")
        DatabaseHanlder.UpdateServerDescription(message, args)
        message.channel.send(`I have set your description to "${args.join(" ")}" \n Thank you!`);
    }
}
 