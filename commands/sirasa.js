const {cmd } = require('../lib')
const sirasanews = require('sirasa-news')
cmd({
        pattern: "sirasa",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
    const sirasa = await sirasanews()
    const caption = `⛶ _𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐂𝐊𝐘  𝐒𝐈𝐑𝐀𝐒𝐀 𝐍𝐄𝐖𝐒_ ⛶    
🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* ${sirasa.result.title}

🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔸𝕋𝔼 𝔸ℕ𝔻 𝕋𝕀𝕄𝔼* : ${sirasa.result.dateandtime}

🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* ${sirasa.result.description}

🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* ${sirasa.result.link}`

await Void.sendMessage(citel.chat, { image: { url: sirasa.result.image }, caption: caption }, { quoted: citel })

    })
