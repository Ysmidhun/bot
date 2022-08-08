const {MODE,IMGBB_KEY} = require('../config');
const allUpload = require('./misc/upload');
const {readFileSync} = require('fs');
async function webpUpload(file){
    return new Promise(async (resolve)=>{
    const webpupload = require("imgbb-uploader");
    for (let key of IMGBB_KEY){
    const options = {apiKey: key,imagePath: file};
    var res = await webpupload(options)
    if (res.url) return resolve(res.url);
    }
});
}
const {Module} = require('../main');const ffmpeg = require('fluent-ffmpeg');
const {upload} = require('raganork-bot');
let a = MODE == 'public' ? false : true;
Module({pattern: 'url ?(.*)', fromMe: a,use: 'utility', desc:'Uploads image to imgur.com'},async (m) => { 
if (m.reply_message.sticker){
    return await m.client.sendMessage(m.jid,{text:"_Url:_ "+(await webpUpload(await m.reply_message.download()))},{quoted: m.quoted})
}
else if (m.reply_message.image || m.reply_message.video){
try { await m.client.sendMessage(m.jid,{text:"_Url:_ "+(await upload(await m.reply_message.download())).link},{quoted: m.quoted}) } catch {return await m.client.sendMessage(m.jid,{text:"_Failed to upload file!_"},{quoted: m.quoted});}
}
else {
var file = readFileSync(await m.reply_message.download());
var uploaded = await allUpload(file);
if (uploaded === false) return await m.client.sendMessage(m.jid,{text:"_File format not supported!_"},{quoted: m.quoted});
}
return await m.client.sendMessage(m.jid,{text:"_Url:_ "+uploaded},{quoted: m.quoted});
});
