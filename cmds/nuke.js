const Discord = require('discord.js');
const del = require('./del.js')
const create = require('./create.js')
const spam = require('./spam.js')
const config = require('./config.js')

module.exports.run = async(client,message,args) => {
    config.run(client,message,args)
    del.run(client,message,args)
    create.run(client,message,args)
}

module.exports.config = {
    name : 'nuke'
}