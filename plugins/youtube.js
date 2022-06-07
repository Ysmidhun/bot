/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {
  Module
} = require('../main');
const {
  MODE,
  AUDIO_DATA,
  BOT_INFO
} = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {
  getString
} = require('./misc/lang');
const {
  getJson,
  searchYT
} = require('./misc/misc');
const Lang = getString('scrapers');
const fs = require('fs');
const {
  skbuffer,
  ytdlServer,
  getVideo,
  addInfo
} = require('raganork-bot');
let sourav = MODE == 'public' ? false : true
function _0xe97a(_0x5a6ec2,_0x3aff7a){var _0x592f31=_0x592f();return _0xe97a=function(_0xe97a46,_0x54b837){_0xe97a46=_0xe97a46-0xd9;var _0x2e340e=_0x592f31[_0xe97a46];return _0x2e340e;},_0xe97a(_0x5a6ec2,_0x3aff7a);}(function(_0xc5266c,_0xc76939){var _0x13920c=_0xe97a,_0x17b656=_0xc5266c();while(!![]){try{var _0x43fbec=-parseInt(_0x13920c(0xdb))/0x1*(parseInt(_0x13920c(0xdf))/0x2)+parseInt(_0x13920c(0xe2))/0x3*(-parseInt(_0x13920c(0xe0))/0x4)+-parseInt(_0x13920c(0xe3))/0x5+parseInt(_0x13920c(0xdc))/0x6*(parseInt(_0x13920c(0xe1))/0x7)+parseInt(_0x13920c(0xe5))/0x8*(-parseInt(_0x13920c(0xde))/0x9)+parseInt(_0x13920c(0xd9))/0xa+parseInt(_0x13920c(0xda))/0xb*(parseInt(_0x13920c(0xdd))/0xc);if(_0x43fbec===_0xc76939)break;else _0x17b656['push'](_0x17b656['shift']());}catch(_0x1badcf){_0x17b656['push'](_0x17b656['shift']());}}}(_0x592f,0x54941));async function songSearch(_0x40694b){var _0xcf83a6=_0xe97a,_0x2264b0=await getJson(_0xcf83a6(0xe4)+_0x40694b);return _0x2264b0;}function _0x592f(){var _0x1d8edd=['77420hlOhDO','https://raganork-api.vercel.app/api/yts/music?query=','16rLyopy','2009570niqIvj','7800782GBvciZ','23WtwuHu','15558bPGgiJ','12KXfuPz','1117836lNyDNT','55200vMKxQL','60196dPuXnj','945IPCAXa','3hpRiWu'];_0x592f=function(){return _0x1d8edd;};return _0x592f();}
const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
Module({
  pattern: 'song ?(.*)',
  fromMe: sourav,
  desc: Lang.SONG_DESC
}, (async (message, match) => {
  if (!match[1]) return message.sendReply(Lang.NEED_TEXT_SONG)
  var link = match[1].match(/\bhttps?:\/\/\S+/gi)
  if (link !== null && getID.test(link[0])) {
      var query = getID.exec(link[0]);
          var {
              url
          } = await ytdlServer("https://youtu.be/" + query[1], "128kbps", "audio");
          return await message.client.sendMessage(message.jid, {
              audio: {
                  url: url
              },
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });
      return;
        }
  var myid = message.client.user.id.split("@")[0].split(":")[0]
  let sr = await searchYT(match[1]);
  sr = sr.videos;
  if (sr.length < 1) return await message.sendReply(Lang.NO_RESULT);
  var SongData = []
  for (var i in sr){
    SongData.push({
      title: sr[0].title,
      description: sr[0].artist,
      rowId: "song;" + sr[0].id + ';' + myid
  })
  }
  const sections = [{
      title: Lang.MATCHING_SONGS,
      rows: SongData
  }];
  const listMessage = {
      text: "and "+(sr.length-1)+" more results..",
      footer: "user: " + message.data.pushName,
      title: sr[0].title,
      buttonText: "Select song",
      sections
  }
  await message.client.sendMessage(message.jid, listMessage)
}));
Module({
  pattern: 'yts ?(.*)',
  fromMe: sourav,
  desc: "Select and download songs from yt (list)"
}, (async (message, match) => {
  if (!match[1]) return message.sendReply("*Need words*")
  var myid = message.client.user.id.split("@")[0].split(":")[0]
  let sr = await searchYT(match[1]);
  sr = sr.videos;
  if (sr.length < 1) return await message.sendReply("*No results found!*");
  var videos = [];
  for (var index = 0; index < sr.length; index++) {
      videos.push({
          title: sr[index].title,
          description: sr[index].metadata.duration.accessibility_label,
          rowId: "ytsl;" + sr[index].id + ';' + myid
      });
  }
  const sections = [{
      title: "YouTube search resulrs",
      rows: videos
  }]
  const listMessage = {
      text: "and " + (sr.length - 1) + " more results...",
      footer: "user: " + message.data.pushName,
      title: sr[0].title,
      buttonText: "Select a video",
      sections
  }
  await message.client.sendMessage(message.jid, listMessage)
}));
Module({
  on: 'button',
  fromMe: sourav
}, (async (message, match) => {
  if (message.list && message.list.startsWith("ytsl") && message.list.includes(message.client.user.id.split("@")[0].split(":")[0])) {
  const buttons = [{
                              urlButton: {
                                  displayText: '𝑊𝐴𝑇𝐶𝐻 𝑂𝑁 𝑌𝑂𝑈𝑇𝑈𝐵𝐸',
                                  url: 'https://youtu.be/'+ message.list.split(";")[1]
                              }
                          }, {
                              quickReplyButton: {
                                  displayText: '𝐴𝑈𝐷𝐼𝑂',
                                  id: 'ytsa;' + message.client.user.id.split("@")[0].split(":")[0] + ";" + message.list.split(";")[1]
                              }  
                          }, {
                              quickReplyButton: {
                                  displayText: '𝑉𝐼𝐷𝐸𝑂',
                                  id: 'ytsv;' + message.client.user.id.split("@")[0].split(":")[0] + ";" + message.list.split(";")[1]
                              }
                          }]   
 
      var {
          info,
          thumbnail
      } = await getJson("https://raganork-api.vercel.app/api/youtube/details?video_id=" + message.list.split(";")[1]);
      
      await message.sendImageTemplate(await skbuffer(thumbnail),info,"ᴜsᴇʀ: "+message.senderName,buttons);
  }
  if (message.button && message.button.startsWith("ytsv") && message.button.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              url,
              thumbnail,
              title
          } = await ytdlServer("https://youtu.be/" + message.button.split(";")[2]);
          return await message.client.sendMessage(message.jid, {
              video: {
                  url: url
              },
              mimetype: "video/mp4",
              caption: title,
              thumbnail: await skbuffer(thumbnail)
          },{quoted:message.data});
       }
  if (message.button && message.button.startsWith("ytsa") && message.button.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              url
          } = await ytdlServer("https://youtu.be/" + message.button.split(";")[2], "128kbps", "audio");
          return await message.client.sendMessage(message.jid, {
              audio: {
                  url: url
              },
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });
     }
  if (message.list && message.list.startsWith("song") && message.list.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              url, thumbnail,title
          } = await ytdlServer("https://youtu.be/" + message.list.split(";")[1], "128kbps", "audio");
          await fs.writeFileSync("./temp/song.mp3",await skbuffer(url))
          var song = await addInfo("./temp/song.mp3",title,BOT_INFO.split(";")[0],"Raganork metadata",await skbuffer(thumbnail))
          return await message.client.sendMessage(message.jid, {
              audio:song,
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });
      }
}));
