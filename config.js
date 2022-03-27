/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6287822886876','6283127014833','6289668185374']
global.pemilik = ['6287822886876']
global.premium = ['6287822886876']
global.pengguna = 'rameg😜'
global.botnma = 'bot anjing'
global.footer = 'bot anjing' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://Instagram.com/xrrmli' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://tiktok.com/@yangtaudiemm' //Ubah Jga Bebas Sama lu 
global.ganti = 'Instagram' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Tiktok'
global.ownernma = 'r'
global.packname = '😰'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
