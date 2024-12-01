const fs = require('fs')
// FallzZetxoBug X Md Version 5.0.0
// Setting Utama
global.owner = "6281584729418" //owner number
//END SETTING 





























































































































































global.namabot = "Fallz-Bot"
global.ownername = "Ghifran"
// Watermark
global.footer = "G" //footer section
global.packname = "Sticker By"
global.author = "Fallz444Official ( Ghifran )"

// Mode Bot
global.status = false //"self/public" section of the bot

// Saluran Whatsapp
global.idsaluran = "120363322641409438@newsletter"
global.namasaluran = "Chanel Fallz444Official"

// Image
global.thumbnail = 'https://pomf2.lain.la/f/lhf4k2q4.jpg'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.themeemoji = '⏳'
global.mess = {
ingroup: "this feature is only for groups !!",
admin: "only group admin & owner bot use this feature !!",
owner: "You are not the Owner",
premium: "you are not a premium user",
seller: "You don't have access as a seller yet",
wait: "in the process..",
daftar: "kamu belum terdaftar\nsilahkan ketik .daftar Fallz.16"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
