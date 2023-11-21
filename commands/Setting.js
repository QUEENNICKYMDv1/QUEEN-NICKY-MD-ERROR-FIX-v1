cmd({

            pattern: "setting",
           
            desc: "(menu cmdlist).",

            category: "downloder",

            react: "⚙️️️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
⚙️ *QUEEN-NICKY-MD_SETTINGS*

┌──────────────
├ *[1] AUTO_VOICE*
├─ 1.1 | Enable auto_voice 🔛
├─ 6.2 | Disable auto_voice 📴
└──────────────
┌──────────────
├ *[2] AUTO_STICKER*
├─ 2.1 | Enable auto_sticker 🔛
├─ 2.2 | Disable auto_sticker 📴
└──────────────
┌──────────────
├ *[3] AUTO_RESTART*
├─ 3.1 | enable auto_restart 🔛
├─ 3.2 | Disable auto_restart 📴
└──────────────
┌──────────────
├ *[4] AUTO_READ_STATUS*
├─ 4.1 | Enable auto_read_status 🔛
├─ 4.2 | Disable auto_read_status 📴
└──────────────
┌──────────────
├ *[5] ALWAYS_ONLINE*
├─ 5.1 | Enable online_status_bot 🔛
├─ 5.2 | Disable online_status_bot 📴
└──────────────
┌──────────────
├ *[6] READ_MESSAGE*

├─  coming  oson

└──────────────
┌──────────────
├ *[7] ANTI_LINK*
├─ 7.1 | Enable antilink all chat's 🔛
├─ 7.2 | Disable antilink all chat's 📴
├
├─ 7.3 | Delete_only 🚮
├─ 7.4 | Delete + Remove ⛔
└──────────────
┌──────────────
├ *[8] ANTI_BOT*
├─ 8.1 | Enable anti_bot all chat's 🔛
├─ 8.2 | Disable anti_bot all chat's 📴
└──────────────
┌──────────────
├ *[9] ANTI_BAD*
├─ 9.1 | Enable antibad-word all chat's 🔛
├─ 9.2 | Disable antibad-word all chat's 📴
├
├─ 9.3 | Delete_only 🚮
├─ 9.4 | Delete + Remove ⛔
└──────────────
┌──────────────
├ *[10] ANTI_DELETE*
├─ 10.1 | Enable anti_delete all chat's 🔛
├─ 10.2 | Disable anti_delete all chat's 📴
└──────────────
┌──────────────
├ *[11] ANTI_VIEWONCE*

├─  coming soon

└──────────────

 ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
    
    
