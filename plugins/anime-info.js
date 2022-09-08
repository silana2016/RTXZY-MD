let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `had lcomand ila bghiti t3rf chi information ala chi anime imta bda odakchi ..... exemple : *.anime naruto*`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *l3onwan:* ${title}
🎆️ *l7al9at:* ${episodes}
➡️ *imta bda :* ${start_date}
🔚 *imta raysali :* ${end_date}
💬 *dyalax:* ${type}
💌️ *ta9yim dyalo:* ${rated}
❤️ *Score dyalo :* ${score}
👥 *xhal mn wahd tfaraj fih imkn :* ${members}
💚️ *info alih:* ${synopsis}
🌐️ *lien ila bghiti tfraj fih *: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
