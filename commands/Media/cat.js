const Discord = require("discord.js");
const superagent = require("../../node_modules/superagent/")

module.exports = {
    config: {
        name: "cat",
        aliases: ["catimage", "meow"],
        usage: "",
        category: "Media",
        description: "Get a random image of a cute cat (Powered by AWS)",
        accessableby: "Members"
    },    
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating....");

        let {body} = await superagent.get('http://aws.random.cat/meow');
        //console.log(body.file)
        if(!{body}) return message.channel.send("I think the api failed its job... Please try again.")
        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor("Meow")
        .setImage(body.file)
        .setTimestamp()
        .setFooter("Foxley")

        message.channel.send(embed);

        msg.delete();

        return;
    }
}
