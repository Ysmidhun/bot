/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {
  FancyRandom,
  getListFromCommand,
  skbuffer
} = require("raganork-bot");
const {
  Module,
  commands
} = require('../main')
const {
  MODE,
  ALIVE,
  BOT_INFO
} = require('../config');
const config = require('../config');
const {
  parseAlive
} = require('./misc/misc');
let w = MODE == 'public' ? false : true
Module({
  pattern: 'menu',
  fromMe: w,
  use: 'utility',
  desc: 'Is bot alive?'
}, (async (message, match) => {
  var myid = message.client.user.id.split(":")[0]
  var buttons = [{
    urlButton: {
        displayText: 'Github',
        url: 'https://github.com/souravkl11/raganork'
    }
}, {
  urlButton: {
    displayText: 'Contact Owner',
    url: 'https://wa.me/'+BOT_INFO.split(";")[2]+'?text=Hey+bro'
    }
}, {
    quickReplyButton: {
        displayText: 'Bot status',
        id: 'ping'+myid
    }
}, {
    quickReplyButton: {
        displayText: 'All commands',
        id: 'commands'+myid
    }  
}, {
    quickReplyButton: {
        displayText: 'Support group',
        id: 'support'+myid
    }
}]
var gmsg = '';
var ownmsg = '';
var dlmsg = '';
var utilmsg = '';
var srmsg = '';
var edmsg = '';
for (var i in commands) {
if (commands[i].use === 'group') {
  gmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
if (commands[i].use === 'owner') {
  ownmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
if (commands[i].use === 'download') {
  dlmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
if (commands[i].use === 'utility') {
  utilmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
if (commands[i].use === 'edit') {
  edmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
if (commands[i].use === 'search') {
  srmsg += `┃✩│ ${Math.floor(parseInt(i)+1)}. ${commands[i].pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/)[2]} \n`
}
}
  var menu = `╭═══〘 ${BOT_INFO.split(";")[0]} 〙═══⊷❍
┃✩╭──────────────
┃✩│
┃✩│ Owner : ${BOT_INFO.split(";")[1]}
┃✩│ User : ${message.senderName}
┃✩│ Mode : ${MODE}
┃✩│ Server : ${config.HEROKU.APP_NAME}
┃✩│ Ram: 1024 MB
┃✩│ Disk Space: 620 GB
┃✩│ Version: ${config.VERSION}
┃✩│
┃✩│
┃✩│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✩│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✩│   ${BOT_INFO.split(";")[0]}
┃✩│ 
┃✩╰───────────────
╰═════════════════⊷

╭════〘 ᴀᴅᴍɪɴ 〙════⊷❍
┃✩╭─────────────────
┃✩│ ${gmsg}
┃✩╰─────────────────
╰══════════════════⊷❍
╭════〘 download 〙════⊷❍
┃✩╭─────────────────
┃✩│ ${dlmsg}
┃✩╰─────────────────
╰══════════════════⊷❍
╭════〘 edit 〙════⊷❍
┃✩╭─────────────────
┃✩│ ${edmsg}
┃✩╰─────────────────
╰══════════════════⊷❍`
return await message.sendImageTemplate(await skbuffer(BOT_INFO.split(";")[3]),FancyRandom(menu),"All rights reserved "+BOT_INFO.split(";")[0],buttons);
}))
Module({
  pattern: 'alive',
  fromMe: w,
  desc: 'Is bot alive?'
}, (async (message, match) => {
  await parseAlive(message, ALIVE)
}))
Module({
  on: 'button',
  fromMe: w,
 }, (async (message, match) => {
var myid = message.client.user.id.split(":")[0]
var {button} = message
if (button) {
  if (button.includes(myid)&&button.startsWith("commands")) return await message.sendReply(FancyRandom(await getListFromCommand(commands)))
  if (button.includes(myid)&&button.startsWith("ping")) {
    const start = new Date().getTime()
    await message.client.sendMessage(message.jid, {
        text: FancyRandom('Ping!')
    })
    const end = new Date().getTime()
    await message.sendReply(FancyRandom('Pong!\n ```' + (end - start) + '``` *ms*')) 
  }
  if (button.includes(myid)&&button.startsWith("support")) return await message.sendReply(BOT_INFO.split(";")[4])
} 
}))
Module({
  pattern: 'ping',
  fromMe: w,
  use: 'utility',
  desc: 'Measures ping'
}, (async (message, match) => {
  const start = new Date().getTime()
  await message.client.sendMessage(message.jid, {
      text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*'
  })
  const end = new Date().getTime()
  await message.client.sendMessage(message.jid, {
      text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
  }, {
      quoted: message.data
  })
}));
