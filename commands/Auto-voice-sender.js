if (icmd) { 
             if (Config.readmessage==="true"){ 
             await Void.readMessages([mek.key]) 
             } 
         } 
         else { 
             if (Config.voice==="true") { 
                 switch(body){ 
                     case 'Mk': case 'Hi': case 'Gm': case'Gn': case'sex': case'hukamu': case'I love you': case'Ado': case'අඩෝ': case'හ්මිමි': { 
                         await Void.sendPresenceUpdate('recording', citel.chat); 
                         const viourl = 'https://github.com/QUEENNICKYMDv1/QUEEN-NICKY-MD-AUTO-VOIC-SENDER/raw/main/'+body+'.mp3'; 
                         await Void.sendMessage(citel.chat, { audio: {url : viourl,}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, }); 
                  await Void.readMessages([mek.key]) 
                     } 
                     break 
                     default :{ 
  
                     } 
                 } 
  
             } 
          }
