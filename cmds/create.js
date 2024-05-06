const Discord = require('discord.js');
const config = require('../json/config')

module.exports.run = async(client,message,args) => {
    for (let i = 0; i < 100; i++) {
        message.guild.channels.create(config.nameChannel, {type : "text"}).then(m => {
            for (let i = 0; i < 100; i++) {
                m.send(config.SendMessages)
            }
        })    }
}

module.exports.config = {
    name : 'create'
}