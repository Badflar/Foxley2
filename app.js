const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Client();

bot.commands = new Collection();
bot.aliases = new Collection();

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.on('ready', async () => {
    console.log(`Bot is ready! ${bot.user.username}`);
    
    let statuses = [
        `Fox videos`,
        `Fox gameplay`,
        `Minecraft Fox Epic Compilation`,
        'Now on AWS and GitHub!',
        'Skree!',
    ];

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];  
        bot.user.setActivity(status, {type: "STREAMING"});
    }, 100000);

    try {
        link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
});

bot.login(token);