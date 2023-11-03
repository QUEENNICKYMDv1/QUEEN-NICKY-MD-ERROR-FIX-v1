const moment = require('moment-timezone') 
 const {fetchJson,cmd, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const axios = require('axios') 
 const fetch = require('node-fetch') 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 
  
     //--------------------------------------------------------------------------- 
  
  cmd({   
       pattern: "nasa",   
       alias: ["news/nasa"],   
       react: "🀄",   
       desc: "",   
       category: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://darkapi--technicalhacke4.repl.co/nasanews`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n*`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
 //--------------------------------------- 
 cmd({  
      pattern: "technews",  
      react: "🧾",  
      desc: "",  
      category: "news",  
      use: '.technews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const technews = await fetchJson(`http://darkapi.technicalhacke4.repl.co/sinhala-technews`);  
  
  
  
  
             const images = `${technews.result.img}`  
             const title = `${technews.result.title}`  
             const news = `${technews.result.decs}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
 //------------------------------------- 
     cmd({ 
         pattern: "news/esana", 
         category: "news", 
         desc: "Searches news", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel) => { 
        let res = await api.latest_id(); 
        const nid = res.results.news_id; 
        let news = await api.news(nid); 
        const tt = news.results.TITLE; 
        const dss = news.results.DESCRIPTION; 
        const ttime = news.results.PUBLISHED; 
        const img = news.results.COVER; 
        const cap = `✦ 𝚃𝚒𝚝𝚕𝚎 :- ${tt} \n \n ◇ ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${dss} \n \n ◈ ᴛɪᴍᴇ :- ${ttime}`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})  
 }) 
 //-------------------------------------------------------------------------- 
 cmd({  
      pattern: "hirunews",  
      alias: ["hiru","news/hiru"],  
      react: "📜",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const hirunews = await fetchJson(`https://hirunews.aquaapk-dl.repl.co/api/latest`);  
            const images = `${hirunews.image}`  
             const title = `${hirunews.title}`  
             const date = `${hirunews.time}`  
             const news = `${hirunews.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
