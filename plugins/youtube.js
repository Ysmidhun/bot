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
const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
const _0x144f7d=_0x56af;(function(_0x4a27a1,_0x11d459){const _0x54ebbe=_0x56af,_0x1103f4=_0x4a27a1();while(!![]){try{const _0x559054=-parseInt(_0x54ebbe(0x191))/0x1+parseInt(_0x54ebbe(0x19a))/0x2+parseInt(_0x54ebbe(0x19b))/0x3+parseInt(_0x54ebbe(0x18c))/0x4+-parseInt(_0x54ebbe(0x18f))/0x5*(parseInt(_0x54ebbe(0x186))/0x6)+parseInt(_0x54ebbe(0x194))/0x7+parseInt(_0x54ebbe(0x1a1))/0x8*(parseInt(_0x54ebbe(0x195))/0x9);if(_0x559054===_0x11d459)break;else _0x1103f4['push'](_0x1103f4['shift']());}catch(_0x45a0b0){_0x1103f4['push'](_0x1103f4['shift']());}}}(_0x5d68,0xcae3e));function _0x5d68(){const _0x4b980a=['nlo','dFi','flo','4088296fkqaVb','sta','tre','1370TFsQAk','you','342578YolTUn','end','tub','3838919FPwhVN','5567337ccaerr','pip','.mp','dow','mp4','204602rPiaay','1014801viNRsq','err','teS','ate','ROR','ei.','8ilXEXP','rea','log','pow','rou','cre','Wri','Byt','\x20MD','yte','[ER','inf','31884nXPiCD','leS','aud'];_0x5d68=function(){return _0x4b980a;};return _0x5d68();}const Innertube=require(_0x144f7d(0x190)+_0x144f7d(0x193)+_0x144f7d(0x1a0)+'js');function _0x56af(_0x1d9c44,_0x58c7a2){const _0x5d688d=_0x5d68();return _0x56af=function(_0x56af89,_0x31cb92){_0x56af89=_0x56af89-0x181;let _0x2d3329=_0x5d688d[_0x56af89];return _0x2d3329;},_0x56af(_0x1d9c44,_0x58c7a2);}async function getSong(_0x814282){return new Promise(async(_0x5885e5,_0x341b8c)=>{const _0x486db3=_0x56af,_0x57fff9=await new Innertube();function _0x8a3671(_0x4a925d){const _0x934002=_0x56af;var _0x46a075=[_0x934002(0x181)+'es','KB','MB','GB','TB'];if(_0x4a925d==0x0)return'0\x20B'+_0x934002(0x183);var _0x1b13fe=parseInt(Math[_0x934002(0x18b)+'or'](Math[_0x934002(0x1a3)](_0x4a925d)/Math['log'](0x400)));return Math[_0x934002(0x1a5)+'nd'](_0x4a925d/Math[_0x934002(0x1a4)](0x400,_0x1b13fe),0x2);}const _0x5f1859=_0x57fff9[_0x486db3(0x198)+_0x486db3(0x189)+'ad'](_0x814282,{'format':_0x486db3(0x199),'quality':'','type':_0x486db3(0x188)+'io'});_0x5f1859[_0x486db3(0x196)+'e'](fs[_0x486db3(0x1a6)+_0x486db3(0x19e)+_0x486db3(0x1a7)+_0x486db3(0x19d)+_0x486db3(0x18e)+'am']('./'+_0x814282+(_0x486db3(0x197)+'4'))),_0x5f1859['on'](_0x486db3(0x18d)+'rt',()=>{const _0x2b117e=_0x486db3;console[_0x2b117e(0x185)+'o']('[RA'+'GAN'+'ORK'+_0x2b117e(0x182)+']','Sta'+'rti'+'ng\x20'+'now'+'!');}),_0x5f1859['on'](_0x486db3(0x192),()=>{const _0x45f757=_0x486db3;_0x5885e5(fs[_0x45f757(0x1a2)+_0x45f757(0x18a)+_0x45f757(0x187)+'ync']('./'+_0x814282+(_0x45f757(0x197)+'4')));}),_0x5f1859['on']('err'+'or',_0x2d6cfb=>console[_0x486db3(0x19c)+'or'](_0x486db3(0x184)+_0x486db3(0x19f)+']',_0x2d6cfb));});};
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
          } = await downloadYT(query[1]);
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
          } = await downloadYT(message.button.split(";")[2]);
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
              thumbnail,title,size
          } = await downloadYT(message.list.split(";")[1]);
          await message.client.sendMessage(message.jid,{image: {url: thumbnail},caption:`*Downloading:* ${'```'+title+'```'} \n *Size:* ${'```'+size+'```'}`})
          var song = await addInfo(await getSong(message.list.split(";")[1]),title,BOT_INFO.split(";")[0],"Raganork metadata",await skbuffer(thumbnail))
          return await message.client.sendMessage(message.jid, {
              audio:song,
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });
      }
}));
