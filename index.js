const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id);

        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(5000);
          await msg.channel.send("j4j fast");
          await sleep(2000);
          await msg.channel.send("https://discord.gg/dETxrGbH52");
        
        }
      }
    }
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j dm') {
    msg.channel.send('j4j dm me fast !');
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j dm me') {
    msg.channel.send('J4J DM ME FAST PLSSS');
  }
});

client.on('message', msg => {
  if (msg.content === 'J4j') {
    msg.channel.send(':white_check_mark: PLS J4J DM ME !');
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j dm me fast') {
    msg.channel.send('who j4j?');
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j dm gel pls') {
    msg.channel.send('J4j türk babalar dm');
  }
});

client.on('message', msg => {
  if (msg.content === 'J4j türk babalar dm') {
    msg.channel.send('j4j dm gel pls');
  }
});

client.on('message', msg => {
  if (msg.content === 'J4j Türkler dm') {
    msg.channel.send('gelin');
  }
});

client.on('message', msg => {
  if (msg.content === 'j4j gerçekler dm gelsin') {
    msg.channel.send('j4j dm gelinnnn loooo');
  }
});

client.on('message', msg => {
  if (msg.content === 'https://discord.gg/') {
    msg.channel.send('j4j ?');
  }
});


client.login(process.env.BOT_TOKEN);
