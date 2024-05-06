const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const {token,prefix} = require('./json/config.js')
client.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, file) => {
    if (err) console.log(err);
    let jsfile = file.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {}
    
    jsfile.forEach((f,i) => {
        let props = require(`./cmds/${f}`)
        console.log(`${f} a été chargé `);
        client.commands.set(props.config.name, props)
    })
})

client.once('ready', () => {
    console.clear()
    console.log(`connecté a ${client.user.username}`)
    console.log("---------------------------------");
    console.log("error :");
    console.log();
})

client.on('message', function(message) {
    if (!message.content.startsWith(prefix)) return;
    let messageAray = message.content.split(" ")
    let args = messageAray.slice(1)
    let command = messageAray[0]
    let commandFile = client.commands.get(command.slice(prefix.length))
    if (commandFile) commandFile.run(client,message,args)


    
})

client.login(token)