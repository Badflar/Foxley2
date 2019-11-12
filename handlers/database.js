const Connection = require('tedious').Connection;
const Request = require('tedious').Request  
const TYPES = require('tedious').TYPES; 
const config = require('../config.json');


var dbConfig = {
    server: config.database.server,
    authentication: {
        type: config.database.authentication.type,
        options: {
            userName: config.database.authentication.options.userName,
            password: config.database.authentication.options.password
        }
    },
    options: {
        database: config.database.options.database
    }
  };

module.exports = {
    
     InsertUser: function(user) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function (err) {
            var request = new Request('usp_ins_User',
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });

                request.addParameter('UserId', TYPES.NVarChar, user.id);
                request.addParameter('Username', TYPES.NVarChar, user.username);
                request.addParameter('Discrim', TYPES.Int, user.discriminator);

                connection.callProcedure(request);
        });
    },

    InsertServerDescription: function(message, args) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function(err) {
            var request = new Request('usp_upd_ServerDescription',
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });

            request.addParameter('ServerId', TYPES.NVarChar, message.guild.id);
            request.addParameter('Description', TYPES.NVarChar, args.join(" "));

            connection.callProcedure(request);
        })
    },

    UpdateServerMessageCount: function(message) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function (err) {
            var request = new Request('usp_upd_ServerMessage',
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });

            let guild = message.guild;

            request.addParameter('ServerId', TYPES.NVarChar, guild.id);
            request.addParameter('ServerName', TYPES.NVarChar, guild.name);
            connection.callProcedure(request);
        })
    },

    InsertBotSuggestion: function(message, args) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function(err) {
            var request = new Request('usp_ins_BotSuggestion',
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });
            
            var user = message.author;
            var suggestion = args.join(" ");

            request.addParameter('UserId', TYPES.NVarChar, user.id);
            request.addParameter('Description', TYPES.NVarChar, suggestion);
            request.addParameter('TimeCreated', TYPES.DateTime, message.createdAt);
            connection.callProcedure(request);
        })
    },

    UpdateUserLevel: function(message) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function(err) {
            var request = new Request('usp_upd_UserXpAndLevel',
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });
            
            var user = message.author;
            var xp = Math.floor(Math.random()*4);

            request.addParameter('UserId', TYPES.NVarChar, user.id);
            request.addParameter('Username', TYPES.NVarChar, user.username);
            request.addParameter('Discriminator', TYPES.Int, user.discriminator);
            request.addParameter('Xp', TYPES.Int, xp * 1);
            connection.callProcedure(request);
            
        })
    },

    GetLevel: function(message) {
        var connection = new Connection(dbConfig);
        connection.on('connect', function(err) {
            var request = new Request(`SELECT [level] FROM [user] WHERE userId = ${message.author.id}`,
            function(err) {
                if (err) {
                    console.log(err);
                }
                connection.close();
            });

            connection.execSql(connection);
            return message.channel.send(request);
        })
    }
};