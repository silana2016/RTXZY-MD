let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'had lcomande ila bghiti tsayb logo ex: *.flaming3 noureddine_ouafy*'
  m.reply('_tsna chwia akhoya osmhlina "afak ila t3tlna alik..._')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `© instagram.com/noureddine_ouafy`, m, false)
}
handler.help = ['flaming6'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming6)$/i

module.exports = handler
