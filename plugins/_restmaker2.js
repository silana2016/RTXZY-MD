let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'had lcomande ila bghiti tsayb logo ex: .logo4 noureddine_ouafy'
  m.reply('_tsna chwia akhoya osmhlina "afak ila t3tlna alik..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/shadow-sky?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© instagram.com/noureddine_ouafy`, m, false)
}
handler.help = ['flaming8'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo4)$/i

module.exports = handler
