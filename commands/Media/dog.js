const Discord = require("discord.js");
const superagent = require("superagent")

module.exports = {
    config: {
        name: "dog",
        aliases: ["dogimage", "woof"],
        usage: "",
        category: "Media",
        description: "Send a random picture of a handsom dog",
        accessableby: "Members"
    },    
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating....");

        let {body} = await superagent.get('https://dog.ceo/api/breeds/image/random');
        //console.log(body.file)
        if(!{body}) return message.channel.send("I think the api failed its job... Please try again.")
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Woof")
        .setImage(body.message)
        .setTimestamp()
        .setFooter("Foxley")

        message.channel.send(embed);

        msg.delete();

        return;
    }
}
