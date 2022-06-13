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
  searchYT,
  searchSong
} = require('./misc/misc');
const {
    downloadYT
  } = require('./misc/yt');
const Lang = getString('scrapers');
const fs = require('fs');
const {
  skbuffer,
  ytdlServer,
  getVideo,
  addInfo
} = require('raganork-bot');
let sourav = MODE == 'public' ? false : true
const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
Module({
  pattern: 'song ?(.*)',
  fromMe: sourav,
  desc: Lang.SONG_DESC,
  use: 'download'
}, (async (message, match) => {
  if (!match[1]) return message.sendReply(Lang.NEED_TEXT_SONG)
  var link = match[1].match(/\bhttps?:\/\/\S+/gi)
  if (link !== null && getID.test(link[0])) {
      var query = getID.exec(link[0]);
          var {
              url
          } = await downloadYT(query[1],"audio");
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
  let sr = await searchSong(match[1]);
  sr = sr.results.songs;
  if (sr.length < 1) return await message.sendReply(Lang.NO_RESULT);
  var SongData = []
  for (var i in sr){
    SongData.push({
      title: sr[i].title,
      description: sr[i].artist,
      rowId: "song;" + sr[i].id + ';' + myid
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
  desc: "Select and download songs from yt (list)",
  use: 'search'
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
      } = await getJson("https://raganork-network.vercel.app/api/youtube/details?video_id=" + message.list.split(";")[1]);
      
      await message.sendImageTemplate(await skbuffer(thumbnail),info,"ᴜsᴇʀ: "+message.senderName,buttons);
  }
  if (message.button && message.button.startsWith("ytsv") && message.button.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              url,
              thumbnail,
              title
          } = await downloadYT(message.button.split(";")[2]);
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
          } = await downloadYT(message.button.split(";")[2],"audio");
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
          } = await downloadYT(message.list.split(";")[1], "audio");
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
