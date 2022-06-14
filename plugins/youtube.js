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
(function(_0xf0a089,_0x362deb){const _0x452e72=_0x5e29,_0x5a72a1=_0xf0a089();while(!![]){try{const _0xe64f91=parseInt(_0x452e72(0x13c))/0x1*(-parseInt(_0x452e72(0x12b))/0x2)+parseInt(_0x452e72(0x125))/0x3*(-parseInt(_0x452e72(0x135))/0x4)+parseInt(_0x452e72(0x177))/0x5+-parseInt(_0x452e72(0x157))/0x6+parseInt(_0x452e72(0x15e))/0x7*(-parseInt(_0x452e72(0x133))/0x8)+-parseInt(_0x452e72(0x15a))/0x9*(parseInt(_0x452e72(0x16c))/0xa)+parseInt(_0x452e72(0x12c))/0xb;if(_0xe64f91===_0x362deb)break;else _0x5a72a1['push'](_0x5a72a1['shift']());}catch(_0xf85f3c){_0x5a72a1['push'](_0x5a72a1['shift']());}}}(_0x3096,0x3757a));function _0x3945(_0xa0294d,_0x106c3d){const _0x347c65=_0x2efd();return _0x3945=function(_0x4485b6,_0x2751dc){_0x4485b6=_0x4485b6-0xb1;let _0x4fcf5f=_0x347c65[_0x4485b6];return _0x4fcf5f;},_0x3945(_0xa0294d,_0x106c3d);}function _0x2efd(){const _0xc962d9=_0x5e29,_0xd8b770=['aud','ine',_0xc962d9(0x12f),_0xc962d9(0x14d),'nda',_0xc962d9(0x175),_0xc962d9(0x165),'203'+_0xc962d9(0x13a)+'2TR'+_0xc962d9(0x12e)+'Y','[RA',_0xc962d9(0x153),'0\x20B',_0xc962d9(0x167)+_0xc962d9(0x123)+_0xc962d9(0x160)+'ExZ'+'B',_0xc962d9(0x126),_0xc962d9(0x169),_0xc962d9(0x16a),'arL',_0xc962d9(0x15b),'eoa',_0xc962d9(0x171),_0xc962d9(0x134),_0xc962d9(0x14c),_0xc962d9(0x13e),'end',_0xc962d9(0x13b),_0xc962d9(0x122),'%\x20(',_0xc962d9(0x141),_0xc962d9(0x145),_0xc962d9(0x15c),_0xc962d9(0x15f),'206'+_0xc962d9(0x168)+_0xc962d9(0x164)+_0xc962d9(0x137)+'f',_0xc962d9(0x16d),'wri',_0xc962d9(0x156),'ei.','pip',_0xc962d9(0x149)+_0xc962d9(0x138)+'oq','460'+'71N'+_0xc962d9(0x136)+'DA',_0xc962d9(0x161),'log',_0xc962d9(0x127),_0xc962d9(0x150)+'073'+_0xc962d9(0x16b)+_0xc962d9(0x131),_0xc962d9(0x14a),_0xc962d9(0x140),'tit',_0xc962d9(0x132),_0xc962d9(0x154),'611'+'621'+'6vc'+'msv'+'l',_0xc962d9(0x13f),_0xc962d9(0x14b),'cur',_0xc962d9(0x16f),'per',_0xc962d9(0x147),']\x20D','ded','24B'+_0xc962d9(0x148)+'UI',_0xc962d9(0x151),'cle',_0xc962d9(0x166),_0xc962d9(0x12a),_0xc962d9(0x14f),_0xc962d9(0x12d),_0xc962d9(0x14e),_0xc962d9(0x139),_0xc962d9(0x152),_0xc962d9(0x143),'ROR',_0xc962d9(0x170),'teS',_0xc962d9(0x13d),_0xc962d9(0x124)+_0xc962d9(0x172)+_0xc962d9(0x146)+_0xc962d9(0x174),'\x20by'];return _0x2efd=function(){return _0xd8b770;},_0x2efd();}function _0x5e29(_0x2dcac7,_0x3ead2d){const _0x309632=_0x3096();return _0x5e29=function(_0x5e29af,_0x1d9890){_0x5e29af=_0x5e29af-0x120;let _0x3462fa=_0x309632[_0x5e29af];return _0x3462fa;},_0x5e29(_0x2dcac7,_0x3ead2d);}const _0x32f8ec=_0x3945;function _0x3096(){const _0x400ce2=['Byt','pow','out','785','siz','XMn','Dow','.mp','28130MHacGq','aud','shi','ame','205','276','431589gQCiTM','tub','cha','rou','Sta','eo_','38SytohS','20296331JRATab','nne','nJs','now','[RA','kFg','std','961864PrAGrS','ng\x20','4zbnOFt','mnI','xCs','cSg','rti','610','\x20MD','21893BRnvmD','sta','[ER','d_s','dow','mp4','yte','det','pus','MB)','SoS','ORK','XbD','56n','gre','err','\x20of','l_n','ade','GAN','568','Wri','own','sor','nlo','ate','you','2331576CEUDaR','cen','tag','3916557xoCUNa','vid','udi','log','14HoVxYG','flo','8GS','ail','adi','mp3','3uv','met','inf','371','448','ize','pro','Qun','10BmCjhA','ada','tre'];_0x3096=function(){return _0x400ce2;};return _0x3096();}(function(_0x4f0144,_0x5d2258){const _0x38f2b6=_0x5e29,_0x5e0239=_0x3945,_0xd3ad4c=_0x4f0144();while(!![]){try{const _0x42f4bd=parseInt(_0x5e0239(0xbc))/0x1+-parseInt(_0x5e0239(0xe3))/0x2+parseInt(_0x5e0239(0xb8))/0x3*(-parseInt(_0x5e0239(0xb7))/0x4)+parseInt(_0x5e0239(0xda))/0x5*(-parseInt(_0x5e0239(0xcb))/0x6)+parseInt(_0x5e0239(0xe7))/0x7+parseInt(_0x5e0239(0xc2))/0x8+parseInt(_0x5e0239(0xb1))/0x9;if(_0x42f4bd===_0x5d2258)break;else _0xd3ad4c[_0x38f2b6(0x144)+'h'](_0xd3ad4c['shi'+'ft']());}catch(_0x3e9739){_0xd3ad4c['pus'+'h'](_0xd3ad4c[_0x38f2b6(0x121)+'ft']());}}}(_0x2efd,0x9bb6c));const Innertube=require(_0x32f8ec(0xb4)+_0x32f8ec(0xe8)+_0x32f8ec(0xb5)+'js');async function getSong(_0x236cac){return new Promise(async(_0x5f358b,_0x475a1a)=>{const _0x44b84b=_0x5e29,_0x5eccc1=_0x3945,_0x68c6f6=await new Innertube();function _0xfa6299(_0x78cd19){const _0x11ce82=_0x5e29,_0x206b3f=_0x3945;var _0x176b21=[_0x206b3f(0xc6)+'es','KB','MB','GB','TB'];if(_0x78cd19==0x0)return _0x206b3f(0xe6)+_0x11ce82(0x142);var _0x235944=parseInt(Math[_0x206b3f(0xf9)+'or'](Math[_0x206b3f(0xba)](_0x78cd19)/Math[_0x11ce82(0x15d)](0x400)));return Math[_0x11ce82(0x128)+'nd'](_0x78cd19/Math[_0x206b3f(0xd7)](0x400,_0x235944),0x2);}type=type===_0x5eccc1(0xec)+'eo'?_0x5eccc1(0xec)+_0x5eccc1(0xed)+_0x5eccc1(0xe0)+_0x5eccc1(0xf8)+'o':_0x44b84b(0x120)+'io';const _0x422311=_0x68c6f6[_0x5eccc1(0xbe)+_0x5eccc1(0xc1)+'ad'](_0x236cac,{'format':_0x5eccc1(0xf6),'quality':'','type':'aud'+'io'});var _0x3a00b1=type===_0x5eccc1(0xdc)+'io'?_0x44b84b(0x163):_0x5eccc1(0xf6);_0x422311[_0x5eccc1(0xb6)+'e'](fs['cre'+_0x44b84b(0x155)+_0x5eccc1(0xcc)+_0x5eccc1(0xd8)+_0x44b84b(0x16e)+'am']('./'+_0x236cac+'.'+_0x3a00b1)),_0x422311['on'](_0x5eccc1(0xd9)+'rt',()=>{const _0x2413e4=_0x44b84b,_0xb794bf=_0x5eccc1;console[_0xb794bf(0xce)+'o'](_0xb794bf(0xe4)+_0xb794bf(0xd0)+_0xb794bf(0xc8)+_0xb794bf(0xf3)+']',_0x2413e4(0x129)+_0xb794bf(0xd3)+_0xb794bf(0xef)+_0xb794bf(0xde)+'!');}),_0x422311['on'](_0x5eccc1(0xce)+'o',_0x3186a3=>{const _0x60ac0d=_0x44b84b,_0x3de77c=_0x5eccc1;console[_0x3de77c(0xce)+'o'](_0x3de77c(0xe4)+_0x3de77c(0xd0)+_0x60ac0d(0x147)+_0x60ac0d(0x13b)+']',_0x3de77c(0xe1)+_0x3de77c(0xc1)+_0x60ac0d(0x162)+_0x3de77c(0xef)+_0x3186a3[_0x60ac0d(0x15b)+_0x3de77c(0xcf)+_0x3de77c(0xd5)+_0x3de77c(0xb9)+'s'][_0x3de77c(0xbf)+'le']+(_0x3de77c(0xdb)+'\x20')+_0x3186a3[_0x3de77c(0xec)+_0x3de77c(0xcf)+_0x60ac0d(0x143)+_0x3de77c(0xb9)+'s'][_0x3de77c(0xe2)+_0x3de77c(0xb2)+'ta'][_0x3de77c(0xbb)+_0x3de77c(0xd1)+_0x3de77c(0xdf)+_0x3de77c(0xf4)]);}),_0x422311['on'](_0x5eccc1(0xea)+_0x5eccc1(0xbd)+'ss',_0x4f1354=>{const _0x3d924b=_0x44b84b,_0x5791d7=_0x5eccc1;process[_0x5791d7(0xc0)+_0x5791d7(0xee)][_0x5791d7(0xcd)+_0x5791d7(0xeb)+_0x5791d7(0xdd)](),process[_0x3d924b(0x132)+_0x5791d7(0xee)][_0x5791d7(0xc5)+_0x5791d7(0xe5)+'To'](0x0),process[_0x3d924b(0x132)+_0x5791d7(0xee)][_0x5791d7(0xb3)+'te'](_0x3d924b(0x130)+_0x3d924b(0x14f)+_0x5791d7(0xc8)+_0x5791d7(0xf3)+_0x5791d7(0xc9)+_0x5791d7(0xd4)+'loa'+_0x5791d7(0xca)+'\x20'+_0x4f1354[_0x5791d7(0xc7)+_0x3d924b(0x158)+_0x3d924b(0x159)+'e']+_0x5791d7(0xf5)+_0x4f1354[_0x5791d7(0xbe)+_0x5791d7(0xc1)+_0x5791d7(0xd2)+_0x5791d7(0xc3)+_0x5791d7(0xe9)]+(_0x5791d7(0xf7)+_0x5791d7(0xf0)+'\x20')+_0x4f1354[_0x3d924b(0x173)+'e']+'MB');}),_0x422311['on'](_0x5eccc1(0xf2),()=>{const _0x3b741c=_0x44b84b;_0x5f358b('./'+_0x236cac+(_0x3b741c(0x176)+'4'));}),_0x422311['on'](_0x5eccc1(0xc4)+'or',_0x33b489=>console[_0x5eccc1(0xc4)+'or'](_0x5eccc1(0xf1)+_0x5eccc1(0xd6)+']',_0x33b489));});};
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
