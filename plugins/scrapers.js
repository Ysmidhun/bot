/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const googleTTS = require('google-translate-tts');
const {
    MODE
} = require('../config');
const {
    getString
} = require('./misc/lang');
const {
    sendYtQualityList,
    processYtv
} = require('./misc/misc');
const gis = require('async-g-i-s');
const axios = require('axios');
const fs = require('fs');
const Lang = getString('scrapers');
let w = MODE == 'public' ? false : true
const translate = require('@vitalets/google-translate-api');

const {
    Module
} = require('../main');
const {
    getVideo,
    ytdlServer,
    skbuffer
} = require('raganork-bot');
const LanguageDetect = require('languagedetect');
const { downloadYT } = require('./misc/yt');
const lngDetector = new LanguageDetect();
(function(_0x1b1f23,_0xfa0007){var _0x3f5cbb=_0x2304,_0x56becd=_0x1b1f23();while(!![]){try{var _0x5f1657=parseInt(_0x3f5cbb(0x1e1))/0x1+-parseInt(_0x3f5cbb(0x1fe))/0x2*(parseInt(_0x3f5cbb(0x200))/0x3)+parseInt(_0x3f5cbb(0x1f6))/0x4*(parseInt(_0x3f5cbb(0x1d8))/0x5)+-parseInt(_0x3f5cbb(0x1e0))/0x6*(-parseInt(_0x3f5cbb(0x1f3))/0x7)+parseInt(_0x3f5cbb(0x1fd))/0x8+-parseInt(_0x3f5cbb(0x1f2))/0x9*(parseInt(_0x3f5cbb(0x1dd))/0xa)+-parseInt(_0x3f5cbb(0x1f9))/0xb;if(_0x5f1657===_0xfa0007)break;else _0x56becd['push'](_0x56becd['shift']());}catch(_0x59dd5c){_0x56becd['push'](_0x56becd['shift']());}}}(_0xb8ef,0x71921));function _0x5936(_0x453149,_0x8dc6cd){var _0x36925d=_0x4012();return _0x5936=function(_0x5352a7,_0x3fe596){_0x5352a7=_0x5352a7-0x9d;var _0x42485c=_0x36925d[_0x5352a7];return _0x42485c;},_0x5936(_0x453149,_0x8dc6cd);}(function(_0x4df8d9,_0x703072){var _0x2647f4=_0x2304,_0x1a98b9=_0x5936,_0x33b37c=_0x4df8d9();while(!![]){try{var _0xef332d=parseInt(_0x1a98b9(0x9d))/0x1+-parseInt(_0x1a98b9(0xa4))/0x2*(-parseInt(_0x1a98b9(0xa6))/0x3)+parseInt(_0x1a98b9(0xa5))/0x4*(-parseInt(_0x1a98b9(0xaa))/0x5)+-parseInt(_0x1a98b9(0xa2))/0x6*(-parseInt(_0x1a98b9(0xab))/0x7)+parseInt(_0x1a98b9(0xaf))/0x8*(parseInt(_0x1a98b9(0x9e))/0x9)+parseInt(_0x1a98b9(0xa3))/0xa+-parseInt(_0x1a98b9(0x9f))/0xb;if(_0xef332d===_0x703072)break;else _0x33b37c[_0x2647f4(0x205)+'h'](_0x33b37c[_0x2647f4(0x1ee)+'ft']());}catch(_0x1f9738){_0x33b37c[_0x2647f4(0x205)+'h'](_0x33b37c[_0x2647f4(0x1ee)+'ft']());}}}(_0x4012,0x54916));function _0xb8ef(){var _0x2a591d=['ps:','.co','mg.','ora','kKg','shi','spl','8pF','Lyj','9yAqEDR','69846cPfCkp','ews','122','4JRzdSE','236','227','151239LGpKrf','123','32b','Jda','5280864bEnmic','31108ZdPTSN','0kz','123cyGGBn','dat','890','NnZ','nlv','pus','724','764','bnf','645','675470hydlVA','18R','228','htt','TVK','3864710nXaYIc','//i','VKb','6wIVulu','697939LOakah','VSD','5Vc','man','pTh','nHT','78e','jpg'];_0xb8ef=function(){return _0x2a591d;};return _0xb8ef();}function _0x4012(){var _0x177f84=_0x2304,_0x220b22=['301'+_0x177f84(0x207)+_0x177f84(0x1ff)+_0x177f84(0x1e2)+'m',_0x177f84(0x202)+_0x177f84(0x1d9)+_0x177f84(0x1e6)+'YO',_0x177f84(0x1d7)+_0x177f84(0x206)+_0x177f84(0x1d6)+_0x177f84(0x203),'3Sq'+'VkY'+'J',_0x177f84(0x1e4),_0x177f84(0x1f4),_0x177f84(0x1e9),_0x177f84(0x1e3)+_0x177f84(0x1f1)+'Z',_0x177f84(0x1f5)+_0x177f84(0x1f8)+_0x177f84(0x1ed)+_0x177f84(0x1dc),_0x177f84(0x1ec),_0x177f84(0x1de),'mg.',_0x177f84(0x1da)+_0x177f84(0x1fb)+_0x177f84(0x204)+'uO',_0x177f84(0x1ea),_0x177f84(0x1db),_0x177f84(0x1f7)+'395'+_0x177f84(0x1e5)+_0x177f84(0x1df),_0x177f84(0x1fa)+'3mB'+'Csc'+'e','762'+'121'+_0x177f84(0x1f0)+'LxN'+'u',_0x177f84(0x1e8),_0x177f84(0x201),_0x177f84(0x1e7)+_0x177f84(0x1fc)+'Qa'];return _0x4012=function(){return _0x220b22;},_0x4012();}function _0x2304(_0x533286,_0x36df7b){var _0xb8ef77=_0xb8ef();return _0x2304=function(_0x23044d,_0x12300d){_0x23044d=_0x23044d-0x1d6;var _0x404d8f=_0xb8ef77[_0x23044d];return _0x404d8f;},_0x2304(_0x533286,_0x36df7b);}async function getNewsImage(_0xd4f871){var _0x68fe1e=_0x2304,_0xf0aa09=_0x5936,_0x156945=await axios(_0xd4f871);return'htt'+_0x68fe1e(0x1e9)+_0xf0aa09(0xad)+_0x68fe1e(0x1eb)+_0xf0aa09(0xa7)+_0xf0aa09(0xac)+_0x68fe1e(0x1e4)+_0x68fe1e(0x1f4)+_0xf0aa09(0xb0)+'m'+_0x156945[_0xf0aa09(0xa1)+'a'][_0x68fe1e(0x1ef)+'it'](_0xf0aa09(0xb1)+_0xf0aa09(0xa9)+_0xf0aa09(0xad)+_0xf0aa09(0xae)+_0xf0aa09(0xa7)+_0xf0aa09(0xac)+_0xf0aa09(0xa7)+_0xf0aa09(0xa8)+_0x68fe1e(0x1ea)+'m')[0x1][_0x68fe1e(0x1ef)+'it'](_0xf0aa09(0xa0))[0x0]+_0xf0aa09(0xa0);};
Module({
    pattern: 'trt ?(.*)',
    fromMe: w,
    usage: Lang.TRANSLATE_USAGE,
    desc: Lang.TRANSLATE_DESC,
    use: 'utility'
}, async (message, match) => {
    if (!message.reply_message) return await message.sendReply(Lang.NEED_REPLY)
    var from = match[1].split(" ")[0] || ''
    var to = match[1].split(" ")[1] || match[1]
    translate(message.reply_message.message, {
        from: from,
        to: to
    }).then(async (res) => {
        if ("text" in res) {
            await message.sendReply(res.text);
        }
    })
});
Module({
    pattern: 'tts ?(.*)',
    fromMe: w,
    desc: Lang.TTS_DESC,
    use: 'utility'
}, async (message, match) => {
    var query = match[1] || message.reply_message.text
    if (!query) return await message.sendReply(Lang.TTS_NEED_REPLY);
    query = query.replace("tts","")
    var lng = 'en';
    if (/[^\x00-\x7F]+/.test(query)) lng = 'ml';
    let
        LANG = lng,
        ttsMessage = query,
        SPEED = 1.0
    if (langMatch = query.match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    }
    if (speedMatch = query.match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    try {
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
    } catch {
        return await message.sendReply("_"+Lang.TTS_ERROR+"_")
    }
    await message.client.sendMessage(message.jid, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: false
    }, {
        quoted: message.data
    });
});
Module({
    pattern: 'ytv ?(.*)',
    fromMe: w,
    desc: Lang.YTV_DESC,
    use: 'download'
}, (async (message, match) => {
    await sendYtQualityList(message, match);
}));
Module({
    on: 'button',
    fromMe: w
}, (async (message, match) => {
    await processYtv(message);
}));
Module({
    pattern: 'img ?(.*)',
    fromMe: w,
    desc: Lang.IMG_DESC,
    use: 'search'
}, (async (message, match) => {
    if (!match[1]) return await message.sendReply(Lang.NEED_WORD);
    var count = parseInt(match[1].split(",")[1]) || 5
    var query = match[1].split(",")[0] || match[1];
    try {
        const results = await gis(query);
        await message.sendReply(Lang.IMG.format(results.splice(0, count).length, query))
        for (var i = 0; i < (results.length < count ? results.length : count); i++) {
         var buff = await skbuffer(results[i].url);
         await message.sendMessage(buff, 'image');
        }
    } catch (e) {
        await message.sendReply(e);
    }
}));
Module({
    pattern: 'video ?(.*)',
    fromMe: w,
    desc: Lang.VIDEO_DESC,
    use: 'download'
}, async (message, match) => {
    var s1 = !match[1].includes('youtu') ? message.reply_message.message : match[1]
    if (s1 && s1.includes("instagram")) return;
    if (!s1) return await message.sendReply("*"+Lang.NEED_VIDEO+"*");
    if (!s1.includes('youtu')) return await message.sendReply("*"+Lang.NEED_VIDEO+"*");
    const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    var qq = getID.exec(s1)
        var {
            url,
            thumbnail,
            title
        } = await downloadYT(qq[1]);
        return await message.client.sendMessage(message.jid, {
            video: {
                url: url
            },
            mimetype: "video/mp4",
            caption: title,
            thumbnail: await skbuffer(thumbnail)
        });
    });
Module({
    pattern: 'news ?(.*)',
    fromMe: w,
    desc: "Latest news",
    use: 'utility'
}, async (message, match) => {
    if (!match[1]) return await message.sendReply("_Need category!_\n_.news *kerala|india|world*_")
    if (match[1].toLowerCase() === "kerala"){
    var news = [];
    var res = (await axios("https://levanter.up.railway.app/news")).data
	for (let i of res.result) {
     console.log(i)
    news.push({title: i.title,rowId:i.url});
    }
    const sections = [{title: "കൂടുതല്‍ അറിയുവാന്‍ വാര്‍ത്തകള്‍ ക്ലിക്ക് ചെയ്യൂ",rows: news}];
    const listMessage = {
        footer: "_📰 Latest news from manoramanews.com_",
        text:"*പ്രധാന വാർത്തകൾ 🗞️*",
        title: res.result[0].title,
        buttonText: "മറ്റു വാര്‍ത്തകള്‍ 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
if (match[1].toLowerCase() === "india") {
    var news = [];
    var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=india")).data
    var sk = res.news[0].articles.slice(0,30)
	for (var i in sk) {
    news.push({title: sk[i].headline,rowId:"ind_news:"+i});
    }
    const sections = [{title: "Click and send to get detailed news!",rows: news}];
    const listMessage = {
        footer: "_📰 Latest Indian news from NDTV_",
        text:"*News Headlines 🗞️*",
        title: res.news[0].articles[0].headline,
        buttonText: "More articles 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
if (match[1].toLowerCase() === "world") {
    var news = [];
    var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=world")).data
    var sk = res.news[0].articles.slice(0,30)
	for (var i in sk) {
    news.push({title: sk[i].headline,rowId:"wrld_news:"+i});
    }
    const sections = [{title: "Click and send to get detailed news!",rows: news}];
    const listMessage = {
        footer: "_📰 Latest International news from NDTV_",
        text:"*News Headlines 🗞️*",
        title: res.news[0].articles[0].headline,
        buttonText: "More articles 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
    
});
Module({
    pattern: 'mediafire ?(.*)',
    fromMe: w,
    desc: "Mediafire Download Link",
    use: 'utility'
}, async (message, match) => {
    if (!match[1]) return await message.sendReply("*Need url*");
    var {link,title,size} = (await axios("https://raganork-network.vercel.app/api/mediafire?url="+match[1])).data
    var mediaFire = [{
        urlButton: {
            displayText: 'Download',
            url: link
        }
    }]
   var header = "_File:_ "+title+"\n _Size:_ "+size+"\n _Click this button to download_"
return await message.sendImageTemplate(await skbuffer("https://play-lh.googleusercontent.com/Br7DFOmd9GCUmXdyTnPVqNj_klusX0OEx6MrElu8Avl2KJ7wbsS7dBdci293o7vF4fk"),header,"Mediafire Downloader",mediaFire)
});
Module({
    pattern: 'ss ?(.*)',
    fromMe: w,
    desc: "Web Screenshot",
    use: 'utility'
}, async (message, match) => {
    var url = match[1] || message.reply_message.text
    if (!url || !/\bhttps?:\/\/\S+/gi.test(url)) return await message.sendReply("*Need url*");
    await message.sendMessage("*Taking screenshot...*");
    return await message.sendReply(await skbuffer("https://shot.screenshotapi.net/screenshot?&url="+url.match(/\bhttps?:\/\/\S+/gi)[0]+"&fresh=true&output=image&file_type=png&wait_for_event=load"),'image')
});
Module({
    on: 'button',
    fromMe: w,
}, async (message, match) => {
    if (message.list && message.list.startsWith("ind_news")) {
        var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=india")).data
        var pos = parseInt(message.list.split(":")[1])
        return await message.client.sendMessage(message.jid,{image: {url:res.news[0].articles[pos].image_url},caption: "*"+res.news[0].articles[pos].description+"*"},{quoted:message.data})
    }
    if (message.list && message.list.startsWith("wrld_news")) {
        var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=world")).data
        var pos = parseInt(message.list.split(":")[1])
        return await message.client.sendMessage(message.jid,{image: {url:res.news[0].articles[pos].image_url},caption: "*"+res.news[0].articles[pos].description+"*"},{quoted:message.data})
        }
    if (message.list && message.list.includes("manoramanews")) {
        var news = (await axios("https://levanter.up.railway.app/news?url="+message.list)).data.result
        return await message.client.sendMessage(message.jid,{image: {url: await getNewsImage(message.list)},caption:"*"+news+"*"},{quoted:message.data})
    }
});
    Module({
        pattern: 'detectlang$',
        fromMe: w,
        desc: Lang.DLANG_DESC,
        use: 'utility'
    }, async (message, match) => {
    
    if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY)
    const msg = message.reply_message.text
    var ldet = lngDetector.detect(msg)
    async function upperfirstLetter(letter) {
        return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
    }
    var cls1 = await upperfirstLetter(ldet[0][0])
    var cls2 = ldet[0][1].toString()
    var cls3 = await upperfirstLetter(ldet[1][0])
    var cls4 = ldet[1][1].toString()
    var cls5 = await upperfirstLetter(ldet[2][0])
    var cls6 = ldet[2][1].toString()
    var cls7 = await upperfirstLetter(ldet[3][0])
    var cls8 = ldet[3][1].toString()
    const res_1 = '*' + Lang.DLANG_INPUT + '* ' + '_' + msg + '_ \n'
    const res_2 = '*' + Lang.DLANG_CLOSER + '* ' + '_' + cls1 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls2 + '_ \n\n'
    const res_3 = '```[ ' + Lang.DLANG_OTHER + ' ]```\n\n'
    const res_4 = '#2 *' + Lang.DLANG_LANG + '* ' + '_' + cls3 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls4 + '_ \n'
    const res_5 = '#3 *' + Lang.DLANG_LANG + '* ' + '_' + cls5 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls6 + '_ \n'
    const res_6 = '#4 *' + Lang.DLANG_LANG + '* ' + '_' + cls7 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls8 + '_'
    const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
    await message.sendReply(rep_7);
});
Module({
    pattern: 'movie (.*)',
    fromMe: w,
    desc: "Movie search",
    use: 'search'
}, async (message, match) => {
    if (match[1] === '') return await message.sendReply('_Need a movie name!_');
	var {data} = await axios(`http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`);
	if (data.Response != 'True') return await message.sendReply("_"+data.Error+"_");
	let msg = '';
	msg += '_Title_     : *' + data.Title + '*\n\n';
	msg += '_Year_      : *' + data.Year + '*\n\n';
	msg += '_Rated_     : *' + data.Rated + '*\n\n';
	msg += '_Released_  : *' + data.Released + '*\n\n';
	msg += '_Runtime_   : *' + data.Runtime + '*\n\n';
	msg += '_Genre_     : *' + data.Genre + '*\n\n';
	msg += '_Director_  : *' + data.Director + '*\n\n';
	msg += '_Writer_    : *' + data.Writer + '*\n\n';
	msg += '_Actors_    : *' + data.Actors + '*\n\n';
	msg += '_Plot_      : *' + data.Plot + '*\n\n';
	msg += '_Language_  : *' + data.Language + '*\n\n';
	msg += '_Country_   : *' + data.Country + '*\n\n';
	msg += '_Awards_    : *' + data.Awards + '*\n\n';
	msg += '_BoxOffice_ : *' + data.BoxOffice + '*\n\n';
	msg += '_Production_: *' + data.Production + '*\n\n';
	msg += '_imdbRating_: *' + data.imdbRating + '*\n\n';
	msg += '_imdbVotes_ : *' + data.imdbVotes;
    var posterApi = (await axios(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${data.Title}`)).data
    var poster = posterApi.total_results !== 0 ? "https://image.tmdb.org/t/p/w500/"+posterApi.results[0].poster_path : data.Poster
    return await message.client.sendMessage(message.jid,{image: {url: poster}, caption:msg},{quoted: message.data})
});