const Discord = require("discord.js");

module.exports = {
    config: {
        name: "userinfo",
        aliases: ["ui", "userdesc"],
        usage: "{user}",
        category: "Info",
        description: "Get infomation a user",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        let mention = message.mentions.first;

        if (!mention) {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}'s User Info`)
            .setTitle(`${message.author.username}#${message.author.discriminator}`)
            .setThumbnail(message.author.avatarURL)
            .addField("Account Info", `Username: **${message.author.username}** \n` +
                        `Discriminator: **${message.author.discriminator}** \n` +
                        `Nickname: **${message.member.nickname}** \n` +
                        `ID: **${message.author.id}**`)
            .addField("Dates", 
                        `Account Created: **${message.author.createdAt}** \n` +
                        `Joined Server On: **${message.member.joinedAt}**`)
            .addField("Status", 
                        `Current Status: **${message.author.presence.status}** \n` +
                        `Currently Playing: **${message.author.presence.game}**`)
            .setFooter("Foxley")
            .setColor('DARK_ORANGE');

            message.channel.send(embed);

            return;
        } 
        else {
            let embed = new Discord.RichEmbed()
            .setAuthor(`${mention.user.username}'s User Info`)
            .setTitle(`${mention.user.username}#${mention.user.discriminator}`)
            .setThumbnail(mention.user.avatarURL)
            .addField("Account Info", `Username: **${mention.user.username}** \n` +
                        `Discriminator: **${mention.user.discriminator}** \n` +
                        `Nickname: **${mention.user.nickname}** \n` +
                        `ID: **${mention.user.id}**`)
            .addField("Dates", 
                        `Account Created: **${mention.user.createdAt}** \n` +
                        `Joined Server On: **${mention.user.joinedAt}**`)
            .addField("Status", 
                        `Current Status: **${mention.user.presence.status}** \n` +
                        `Currently Playing: **${mention.user.presence.game}**`)
            .setFooter("Foxley")
            .setColor('DARK_ORANGE');

            message.channel.send(embed);

            return
        }
    }
}
