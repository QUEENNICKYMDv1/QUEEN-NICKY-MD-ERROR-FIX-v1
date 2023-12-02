cmd({
            pattern: "mod",
            react: "📂,
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
*QUEEN-NICKY-MD_WA-MOD-DOWNLOADER*


*1 | WhatsApp*

*2 | GBWhatsapp*

*3 | FMWhatsapp*

*4 | YOWhatsapp*


⦁ *Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ ᴠ1*
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ
`;
            let aliveMessage = {
                image: {
                    url: 'https://telegra.ph/file/15292e4162b588473b7b3.jpg',
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
