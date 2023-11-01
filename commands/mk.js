cmd({

            pattern: "mk",
           
             alias :['mk','මොකද කරන්නේ ','MK'],

            desc: "(menu cmdlist).",

            category: "other",

            react: "Ⓜ️",

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
○ ○              ○ ○ 
○    ○         ○   ○ 
○       ○   ○      ○ 
○          ○          ○ 
○          ○          ○


○            ○ 
○         ○ 
○ ○ ○ 
○          ○ 
○              ○

${Config.ownername}
               
*CRATED BY DUMIDU🕵️*
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
