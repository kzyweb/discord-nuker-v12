const Discord = require('discord.js');
const config = require('../json/config')

module.exports.run = async(client,message,args) => {
    message.guild.setName(config.guild.setName)
    message.guild.setIcon(config.guild.setIcon)
}

module.exports.config = {
    name : 'config'
}