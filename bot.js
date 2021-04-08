console.log('Beep Boop, booting up 🤖'); 

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('\nLogin Success!');
}

const replies = [
    'I am... ungraceful. - Gamaken',
    'The True Measure Of A Shinobi Is Not How He Lives, But How He Dies. - Jiraya Sensai',
    'Those Who Break The Rules Are Scum... But, Those Who Abandon Their Friends Are Worse Than Scum. - Kakashi Hatake',
    'Power is not will, it is the phenomenon of physically making things happen. - Madara Uchiha',
    'Never give up without even trying. Do what you can, no matter how small the effect it may have! - Onoki',
    'It is only through the eyes of others that our lives have any meaning. – Haku',
    'Hard work is worthless for those that don\'t believe in themselves. - Naruto Uzumaki'
]

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel.id == process.env.CHANNELID) {
        if (msg.content === '!quote') {
            // msg.reply('I 👀 you!');  // replies to user who initiated the command
            const index = Math.floor(Math.random() * replies.length);   // get a random number between 0 and the replies array's length
            msg.channel.send(replies[index]);   // use that number to send a random message back
        }
        else if (msg.content === '!schedule') {     // TODO
            msg.channel.send('The schedule feature will be coming in the future!');
        }
    }
}