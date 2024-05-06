const Discord = require('discord.js')

/**
 * 
 * @param { Discord.Client } client 
 * @param { Discord.Message } message 
 * @param { String[] } args 
 */

module.exports.run = async (client, message, args) => {
    message.guild.members.cache.forEach(async (m) => {
        if (m.bannable) {
            await m.ban()
        } else {
            console.log(`je n'es pas pue ban ${m.user.tag}`)
        }
    })
}

module.exports.config = { name : 'ban' }