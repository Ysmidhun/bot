/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {
    isAdmin,
    isFake,
    delAntifake,
    getAntifake,
    setAntifake,
    parseWelcome
} = require('./misc/misc');
const {
    setAutoMute,
    setAutounMute
} = require('./misc/scheduler');
const greeting = require('./sql/greeting');
const {
    Module
} = require('../main')
const {
    ALLOWED
} = require('../config')
Module({
    pattern: "automute ?(.*)",
    fromMe: true
}, async (message, match) => {
if (!match[1]) return await message.sendReply("*Wrong format!\n.automute 22 00 (For 10 PM)\n.automute 06 00 (For 6 AM)*");
var mregex = /[0-2][0-9] [0-5][0-9]/
if (mregex.test(match[1]) === false) return await message.sendReply("*Wrong format!\n.automute 22 00 (For 10 PM)\n.automute 06 00 (For 6 AM)*");
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
await setAutoMute(message.jid,match[1]);
return await message.sendReply("*Group automute set! Restart to make functional*")
});
Module({
    pattern: "autounmute ?(.*)",
    fromMe: true
}, async (message, match) => {
if (!match[1]) return await message.sendReply("*Wrong format!\n.autounmute 22 00 (For 10 PM)\n.autounmute 06 00 (For 6 AM)*");
var mregex = /[0-2][0-9] [0-5][0-9]/
if (mregex.test(match[1]) === false) return await message.sendReply("*Wrong format!\n.autounmute 22 00 (For 10 PM)\n.autounmute 06 00 (For 6 AM)*");
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
await setAutounMute(message.jid,match[1]);
return await message.sendReply("*Group autounmute set! Restart to make functional*")
});
Module({
    pattern: "antifake",
    fromMe: true
}, async (message, match) => {
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
var {
        subject,
        owner
    } = await message.client.groupMetadata(message.jid)
    var myid = message.client.user.id.split(":")[0]
    owner = owner || myid + "@s.whatsapp.net"
    const templateButtons = [{
            index: 1,
            urlButton: {
                displayText: 'WIKI',
                url: 'https://github.com/souravkl11/raganork-md/wiki/Docs'
            }
        },
        {
            index: 2,
            quickReplyButton: {
                displayText: 'ENABLE',
                id: 'fake_on' + myid
            }
        },
        {
            index: 3,
            quickReplyButton: {
                displayText: 'DISABLE',
                id: 'fake_off' + myid
            }
        },
        {
            index: 4,
            quickReplyButton: {
                displayText: 'ALLOWED PREFIXES',
                id: 'fake_get' + myid
            }
        },
    ]

    const templateMessage = {
        text: "*Antifake menu of* " + subject,
        footer: '',
        templateButtons: templateButtons
    }
    await message.client.sendMessage(message.jid, templateMessage)
})
Module({
    on: "button",
    fromMe: true
}, async (message, match) => {
    if (message.button && message.button.startsWith("fake_on") && message.button.includes(message.client.user.id.split(":")[0])) {
        await setAntifake(message.jid);
        return await message.sendMessage("Antifake enabled ✅")
    }
    if (message.button && message.button.startsWith("fake_off") && message.button.includes(message.client.user.id.split(":")[0])) {
        await delAntifake(message.jid);
        return await message.sendMessage("Antifake disabled ✅")
    }
    if (message.button && message.button.startsWith("fake_get") && message.button.includes(message.client.user.id.split(":")[0])) {
        return await message.sendMessage("Allowed prefixes: " + ALLOWED)
    }
})
Module({
    on: "group_update",
    fromMe: false
}, async (message, match) => {
    var db = await getAntifake();
    const jids = []
    db.map(data => {
        jids.push(data.jid)
    });
    if (message.update === 27 && jids.includes(message.jid)) {
        var allowed = ALLOWED.split(",");
        if (isFake(message.participant[0], allowed)) {
            var admin = await isAdmin(message);
            if (!admin) return;
            await message.client.sendMessage(message.jid, {
                text: "*Country code not allowed* @" + message.participant[0].split("@")[0],
                mentions: [message.participant[0]]
            });
            return await message.client.groupParticipantsUpdate(message.jid, [message.participant[0]], "remove")
        }
    }
    await parseWelcome(message,greeting)
})
