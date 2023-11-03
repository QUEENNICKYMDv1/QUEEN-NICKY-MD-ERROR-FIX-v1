const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "fb",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* 🌏.");
                return;
            }

            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`);

            if (!wamod.result || !wamod.result.hd) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: wamod.result.hd },
                    mimetype: "video/mp4",
                    caption:'┏━━━━━━━━━━━━━┓\n\n🐹 *Qᴜᴇᴇɴ ɴɪᴄᴋʏ ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🐹\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ*: dumidu\n\n✷▎🎋⃟🥷 *ᴄʀᴇᴀᴛᴇʀ ɴᴜᴍʙᴇʀ*:  wa.me//+94742443114\n\n┗━━━━━━━━━━━━━┛\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "📘",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

const videolink = fbdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }
