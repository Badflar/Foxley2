const { steamkey } = require("../../config.js")
const fetch = require("node-fetch")
const { stripIndents } = require("common-tags");

module.exports() = {
    config: {
        name: "steamuser",
        aliases: ["steamsearch", "steam"],
        usage: "",
        category: "Game",
        description: "Gets steam statistics of a user",
        accessableby: "Members"
    },    
    run: async(bot, message, args) => {
        if (!args[0]) return message.channel.send("Pleaes include an user to search up in the command!")

        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamkey}&vanityurl=${args.join(" ")}`;
        fetch(url).then(res = res.json()).then(body => {
            if(body.response.success == 42) return message.channel.send("Sorry, I was unable to find that user! (Make sure you are using their display name and not account name.)")
        })
    }
}