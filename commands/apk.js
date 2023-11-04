const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "downapk",
    alias: ["ps","apk","playstore"],
    desc: "download playstore app",
    react: "🏷️",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, {
        image: {
            url: icon,
        },
        caption: `
        \n ✧ *SHENU QUEEN SEARCH APP*
        \n━━━━━━━━━━━━━━━━━━
        
        \n ┇📚 *ᴀᴘᴘ ɴᴀᴍᴇ:* ${getname}
        
        \n ┇⬆️ *ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ:* ${lastupdate}
        
        \n ┇💻 *ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ:* ${packagename}
        
        \n ┇📊 *ꜰɪʟᴇ ꜱɪᴢᴇ:* ${size}
        
        \n ❭ *ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ ° ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴛʜᴜꜱʜᴀɴ*`,
    })
    return Void.sendMessage(citel.chat, {
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `🧚 *ꜱʜᴇɴᴜ-𝑄ᴜᴇᴇɴ-ᴍᴅ ᴠ1*
👩‍💻 *ᴄʀᴇᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴛʜᴜꜱʜᴀɴ*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(` *❌ An error occurred while processing your request. Please try again later.* ${err}`);
  }
})
