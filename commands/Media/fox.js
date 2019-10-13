const Discord = require("discord.js");
const superagent = require("superagent")

module.exports = {
    config: {
        name: "fox",
        aliases: ["foximage", "floof"],
        usage: "",
        category: "Media",
        description: "Send a random picture of a majestic fox",
        accessableby: "Members"
    },    
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating....");

        let {body} = await superagent.get('https://randomfox.ca/floof/');
        //console.log(body.file)
        if(!{body}) return message.channel.send("I think the api failed its job... Please try again.")
        let embed = new Discord.RichEmbed()
        .setColor("ORANGE")
        .setAuthor("Floof")
        .setImage(body.image)
        .setTimestamp()
        .setFooter("Foxley")

        message.channel.send(embed);

        msg.delete();

        return;
    }
}
