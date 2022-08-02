/* Copyright (C) 2022 YS MIDHUN.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
APARNA V3 MD - YS MIDHUN 
*/
const {
    Module
} = require('../main');
Module({
    pattern: 'react ?(.*)',
    fromMe: true,
    use: 'utility'
}, (async (m, t) => {
    let msg = {
        remoteJid: m.reply_message.jid,
        id: m.reply_message.id
    }
    const reactionMessage = {
        react: {
            text: t[1],
            key: msg
        }
    }

    await m.client.sendMessage(m.jid, reactionMessage);
}));
