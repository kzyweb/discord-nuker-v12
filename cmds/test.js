const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    message.channel.send("test !")
}

module.exports.config = {
    name : 'test'
}