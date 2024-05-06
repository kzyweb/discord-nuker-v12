const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    message.guild.channels.cache.forEach(m => {
        m.delete()
    })
    message.guild.channels.create("log")
}

module.exports.config = {
    name : 'del'
}