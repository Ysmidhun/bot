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
(function(_0x435033,_0x41a618){const _0xf8d2cf=_0xbf90,_0x132bcb=_0x435033();while(!![]){try{const _0x4fc889=parseInt(_0xf8d2cf(0x211))/0x1+-parseInt(_0xf8d2cf(0x22d))/0x2*(-parseInt(_0xf8d2cf(0x21f))/0x3)+-parseInt(_0xf8d2cf(0x234))/0x4*(parseInt(_0xf8d2cf(0x22e))/0x5)+-parseInt(_0xf8d2cf(0x243))/0x6*(-parseInt(_0xf8d2cf(0x221))/0x7)+parseInt(_0xf8d2cf(0x218))/0x8+-parseInt(_0xf8d2cf(0x245))/0x9*(-parseInt(_0xf8d2cf(0x1fa))/0xa)+parseInt(_0xf8d2cf(0x250))/0xb*(-parseInt(_0xf8d2cf(0x1fd))/0xc);if(_0x4fc889===_0x41a618)break;else _0x132bcb['push'](_0x132bcb['shift']());}catch(_0x3db2e5){_0x132bcb['push'](_0x132bcb['shift']());}}}(_0x138f,0x8fdac));function _0x138f(){const _0x35b7cb=['Nny','ORK','dow',']\x20D','ada','.mp','pip','ejE','\x20of','std','\x20MD','5AZ','JFF','wri','sor','d_s','715952qifPEM','ync','adi','076','rti','l_n','met','5171352dTzxJa','out','mp4','%\x20(','pus','ail','106','153tWqdfm','0CC','371yOBJNj','tre','cre','094','tub','xXb','arL','end','tag','Zny','\x20by','Dow','4358rVZdSh','275zfUjxj','rou','GpY','shi','56N','yte','11560eriaRp','pow','441','gre','98d','flo','cha','teS','ei.','GAN','5nv','cur','lwJ','det','211','105258KvDwLi','aud','72eXihCI','sta','ade','492','ng\x20','sKp','nlo','0\x20B','VjH','Wri','vid','419529DLVyDd','log','per','[RA','eo_','err','ded','tit','cen','ine','dFi','32P','380','Sta','own','UjH','171790XSxChk','rea','ate','564iBTmaZ','542','Byt','656'];_0x138f=function(){return _0x35b7cb;};return _0x138f();}function _0x3fbc(){const _0x5671a2=_0xbf90,_0x2498e8=[_0x5671a2(0x207),_0x5671a2(0x20f),_0x5671a2(0x1ff),_0x5671a2(0x1f4),_0x5671a2(0x247),_0x5671a2(0x225),_0x5671a2(0x233),_0x5671a2(0x202),'775'+_0x5671a2(0x248)+'2BY'+'uGb'+'q',_0x5671a2(0x219),_0x5671a2(0x254),_0x5671a2(0x241),'loa','you',_0x5671a2(0x23a),_0x5671a2(0x256),_0x5671a2(0x23d),_0x5671a2(0x20a),_0x5671a2(0x1fc),_0x5671a2(0x244),_0x5671a2(0x23e)+_0x5671a2(0x22a)+'n',_0x5671a2(0x23f),_0x5671a2(0x24b),_0x5671a2(0x253),_0x5671a2(0x255),_0x5671a2(0x20b),_0x5671a2(0x209),_0x5671a2(0x1f7),_0x5671a2(0x210),_0x5671a2(0x21a),_0x5671a2(0x203),'pro',_0x5671a2(0x232)+_0x5671a2(0x20d)+'Yo',_0x5671a2(0x21b),_0x5671a2(0x215),_0x5671a2(0x213),_0x5671a2(0x212),_0x5671a2(0x206),_0x5671a2(0x21e)+_0x5671a2(0x24d)+_0x5671a2(0x240),'leS',_0x5671a2(0x205),_0x5671a2(0x251),_0x5671a2(0x217),_0x5671a2(0x21d),'inf',_0x5671a2(0x22f),'996'+_0x5671a2(0x224)+_0x5671a2(0x24a)+_0x5671a2(0x201),'ame','151'+_0x5671a2(0x214)+'7wN'+_0x5671a2(0x208)+'L',_0x5671a2(0x1fb),'ROR',_0x5671a2(0x242)+_0x5671a2(0x238)+_0x5671a2(0x230)+'XD',_0x5671a2(0x229),_0x5671a2(0x223),'nne',_0x5671a2(0x24c),_0x5671a2(0x237),_0x5671a2(0x257),_0x5671a2(0x1f6)+_0x5671a2(0x1f5)+_0x5671a2(0x226)+'aB',_0x5671a2(0x22b),_0x5671a2(0x20e),_0x5671a2(0x22c),_0x5671a2(0x23b),_0x5671a2(0x239),'cle',_0x5671a2(0x222),_0x5671a2(0x24f),'[ER',_0x5671a2(0x204),_0x5671a2(0x236)+'759'+_0x5671a2(0x20c)+'GdM'+'F',_0x5671a2(0x1fe)+_0x5671a2(0x200)+_0x5671a2(0x220)+_0x5671a2(0x1f9)+'E',_0x5671a2(0x23c),'MB)'];return _0x3fbc=function(){return _0x2498e8;},_0x3fbc();}function _0xbf90(_0x5a328f,_0x1ee8b5){const _0x138f28=_0x138f();return _0xbf90=function(_0xbf90b0,_0x1679ee){_0xbf90b0=_0xbf90b0-0x1f2;let _0x1a664a=_0x138f28[_0xbf90b0];return _0x1a664a;},_0xbf90(_0x5a328f,_0x1ee8b5);}const _0x410071=_0x5a14;(function(_0x4d33d1,_0x3d73bd){const _0x32749c=_0xbf90,_0x39cf16=_0x5a14,_0x3ea283=_0x4d33d1();while(!![]){try{const _0x24ad5f=-parseInt(_0x39cf16(0x1f9))/0x1+-parseInt(_0x39cf16(0x1f1))/0x2*(-parseInt(_0x39cf16(0x1fe))/0x3)+-parseInt(_0x39cf16(0x205))/0x4*(parseInt(_0x39cf16(0x1df))/0x5)+parseInt(_0x39cf16(0x1d3))/0x6+parseInt(_0x39cf16(0x1c7))/0x7+-parseInt(_0x39cf16(0x1eb))/0x8*(parseInt(_0x39cf16(0x1fb))/0x9)+parseInt(_0x39cf16(0x1c8))/0xa;if(_0x24ad5f===_0x3d73bd)break;else _0x3ea283['pus'+'h'](_0x3ea283[_0x32749c(0x231)+'ft']());}catch(_0x3c14ba){_0x3ea283[_0x32749c(0x21c)+'h'](_0x3ea283[_0x32749c(0x231)+'ft']());}}}(_0x3fbc,0xa1273));function _0x5a14(_0x2feb59,_0x41556e){const _0x2282e0=_0x3fbc();return _0x5a14=function(_0x2b9882,_0x3cf0f5){_0x2b9882=_0x2b9882-0x1c5;let _0x271dda=_0x2282e0[_0x2b9882];return _0x271dda;},_0x5a14(_0x2feb59,_0x41556e);}const Innertube=require(_0x410071(0x1d8)+_0x410071(0x1d0)+_0x410071(0x1c9)+'js');async function getSong(_0x439dad){return new Promise(async(_0x3cd3b9,_0x1bdbbe)=>{const _0x2c509a=_0xbf90,_0x1924d3=_0x5a14,_0x3f762f=await new Innertube();function _0x911780(_0x2cd160){const _0x24f706=_0xbf90,_0x55fc7b=_0x5a14;var _0xddb0c4=[_0x55fc7b(0x1cd)+'es','KB','MB','GB','TB'];if(_0x2cd160==0x0)return _0x55fc7b(0x202)+_0x55fc7b(0x1d1);var _0x183d99=parseInt(Math[_0x55fc7b(0x20a)+'or'](Math[_0x55fc7b(0x1f4)](_0x2cd160)/Math[_0x24f706(0x251)](0x400)));return Math[_0x55fc7b(0x1f8)+'nd'](_0x2cd160/Math[_0x24f706(0x235)](0x400,_0x183d99),0x2);}const _0x317213=_0x3f762f[_0x1924d3(0x1e9)+_0x1924d3(0x1e1)+'ad'](_0x439dad,{'format':_0x1924d3(0x1e8),'quality':'','type':_0x1924d3(0x1de)+'io'});_0x317213[_0x1924d3(0x1cb)+'e'](fs[_0x1924d3(0x200)+_0x1924d3(0x1dd)+_0x2c509a(0x24e)+_0x1924d3(0x209)+_0x1924d3(0x20c)+'am']('./'+_0x439dad+(_0x2c509a(0x206)+'4'))),_0x317213['on'](_0x2c509a(0x246)+'rt',()=>{const _0x1c38e4=_0x2c509a,_0x1d0099=_0x1924d3;console[_0x1d0099(0x1f7)+'o'](_0x1d0099(0x1e2)+_0x1c38e4(0x23d)+_0x1c38e4(0x202)+_0x1d0099(0x1e4)+']',_0x1d0099(0x1e6)+_0x1d0099(0x1ed)+'ng\x20'+'now'+'!');}),_0x317213['on'](_0x1924d3(0x1f7)+'o',_0x4862b9=>{const _0x590574=_0x2c509a,_0x5a8b6b=_0x1924d3;console[_0x5a8b6b(0x1f7)+'o'](_0x5a8b6b(0x1e2)+_0x5a8b6b(0x1db)+_0x5a8b6b(0x1d2)+_0x5a8b6b(0x1e4)+']',_0x5a8b6b(0x208)+_0x5a8b6b(0x1e1)+_0x5a8b6b(0x1ee)+_0x590574(0x249)+_0x4862b9[_0x5a8b6b(0x20d)+_0x5a8b6b(0x1d5)+_0x5a8b6b(0x1d6)+_0x5a8b6b(0x1f6)+'s'][_0x5a8b6b(0x204)+'le']+(_0x5a8b6b(0x206)+'\x20')+_0x4862b9[_0x5a8b6b(0x20d)+_0x5a8b6b(0x1d5)+_0x5a8b6b(0x1d6)+_0x5a8b6b(0x1f6)+'s'][_0x5a8b6b(0x1f5)+_0x5a8b6b(0x1f3)+'ta'][_0x5a8b6b(0x1d9)+_0x5a8b6b(0x201)+_0x590574(0x216)+_0x5a8b6b(0x1fa)]);}),_0x317213['on'](_0x1924d3(0x1ea)+_0x1924d3(0x203)+'ss',_0x189adf=>{const _0x254779=_0x2c509a,_0x5ac4aa=_0x1924d3;process[_0x5ac4aa(0x1dc)+_0x5ac4aa(0x1d4)][_0x5ac4aa(0x20b)+_0x254779(0x227)+_0x254779(0x1f3)](),process[_0x5ac4aa(0x1dc)+_0x5ac4aa(0x1d4)][_0x5ac4aa(0x1e0)+_0x5ac4aa(0x1cc)+'To'](0x0),process[_0x5ac4aa(0x1dc)+_0x5ac4aa(0x1d4)][_0x5ac4aa(0x207)+'te'](_0x5ac4aa(0x1e2)+_0x5ac4aa(0x1db)+_0x5ac4aa(0x1d2)+_0x5ac4aa(0x1e4)+_0x5ac4aa(0x1c6)+_0x254779(0x1f8)+_0x5ac4aa(0x1d7)+_0x5ac4aa(0x1da)+'\x20'+_0x189adf[_0x254779(0x252)+_0x254779(0x1f2)+_0x5ac4aa(0x1ff)+'e']+_0x5ac4aa(0x1ec)+_0x189adf[_0x5ac4aa(0x1e9)+_0x5ac4aa(0x1e1)+_0x5ac4aa(0x1cf)+_0x5ac4aa(0x1e7)+'ize']+(_0x5ac4aa(0x1ca)+_0x5ac4aa(0x1e5)+'\x20')+_0x189adf['siz'+'e']+'MB');}),_0x317213['on'](_0x2c509a(0x228),()=>{const _0x15370c=_0x1924d3;_0x3cd3b9(fs[_0x15370c(0x1fc)+_0x15370c(0x1ce)+_0x15370c(0x1f2)+_0x15370c(0x1ef)]('./'+_0x439dad+(_0x15370c(0x1f0)+'4')));}),_0x317213['on'](_0x1924d3(0x1e3)+'or',_0x4f865f=>console[_0x1924d3(0x1e3)+'or'](_0x1924d3(0x1c5)+_0x1924d3(0x1fd)+']',_0x4f865f));});};
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
