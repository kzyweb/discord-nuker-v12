const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    if (message.author.id !== '723590783621398569') {
        return message.channel.send(`tu peut pas utilisé cette commande !`)
    } else {
        await message.channel.send(`bot arrété `)
        process.exit();
    }
    
}

module.exports.config = {
    name : 'stop'
}