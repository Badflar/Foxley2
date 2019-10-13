const Discord = require("discord.js");

module.exports = {
    config: {
        name: "say",
        aliases: ["repeat", "echo"],
        usage: "{?embed} {message}",
        category: "Bot",
        description: "Make Foxley say a message (add 'embed' infront of your message to make the message embeded)",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if (args.length < 1)
                return message.reply("Nothing to say?").then(m => m.delete(5000));

            if (args[0].toLowerCase() === "embed") { 
                const embed = new Discord.RichEmbed()
                    .setColor("ORANGE")
                    .setDescription(args.slice(1).join(" "));

                message.channel.send(embed);
            } else {
                message.channel.send(args.join(" "));
            }

            return;
    }
}
