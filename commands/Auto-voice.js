const { tlang } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'const { tlang } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.github.com/QUEENNICKYMDv1/71fe553058fdb0130074d98ae2b2f057/raw'



cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})'



cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
