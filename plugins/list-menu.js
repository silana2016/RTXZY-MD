// beta list menu ujicoba doang 

let handler = async (m, { conn, text, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
   let ar = ['list', 'menu']
   let ras = `طبيعة ربيعة معاك حروبات اخويا 😆  \n
   @${m.sender.split('@')[0]}`
    let sel = `*❀ instagram.com/noureddine_ouafy*`
    let rs = `clicki hna akhoya ⭐ `
const sections = [ {
	title: `☁️ ${uptime} || ⏲️ ${time} WIB`,
	rows: [
	{title: `اشنو يقدر يدير هاد البوت `, rowId: `.a `},//, description: `اظغط هنا لتنبتق لك جميع الاوامر`},
        {title: `كفاش تخدم البوت `, rowId: `#sc `},//, description: ``},
        {title: `صفحتى على الفيسبوك`, rowId: `#gcbot `},//, description: ``},
        {title: `سرعة البوت`, rowId: `#speed `},//, description: ``},
		
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: 'مرحبا كيف حالك صديقي لبس عليك كولشي مزيان شوف متصباميش علا البوت مفهمتيش شي حاجة توصال مع مول البوت ماشي غي تبقا تجرب غي هكاك',
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
