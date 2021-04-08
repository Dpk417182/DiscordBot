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
    'I 👀 you!',
    'Will you wear wigs?',
    'When will you wear wigs?',
    'Number 1 Victory Royale, yeah thats right we bout to get down (get down)'
]

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel.id == process.env.CHANNELID) {
        if (msg.content === '!test') {
            // msg.reply('I 👀 you!');  // replies to user who initiated the command
            const index = Math.floor(Math.random() * replies.length);   // get a random number between 0 and the replies array's length
            msg.channel.send(replies[index]);   // use that number to send a random message back
        }
        else if (msg.content === '!upcoming') {
            msg.channel.send('upcoming command entered!');
        }
    }
}