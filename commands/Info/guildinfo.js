const Discord = require("discord.js");

module.exports = {
    config: {
        name: "guildinfo",
        aliases: ["gi", "guilddesc"],
        usage: "",
        category: "Info",
        description: "Get infomation about the Guild",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        let guIcon = message.guild.iconURL;
        let embed = new Discord.RichEmbed()
        .setTitle("Server Info")
        .setColor('DARK_ORANGE')
        .setThumbnail(guIcon)
        .addField("Server Name", message.guild.name)
        .addField("Owner", message.guild.owner.user.username)
        .addField("User Count", message.guild.memberCount)
        .addField("Guild ID", message.guild.id)
        .addField("Region", message.guild.region)
        .addField("Invite", await message.channel.createInvite())
        .addField("Verification Level", message.guild.verificationLevel)
        .addField("Created On", message.guild.createdAt)
        .setFooter("Creator: Badflar || Foxley");

        await message.channel.send(embed);

        return;
    }
}