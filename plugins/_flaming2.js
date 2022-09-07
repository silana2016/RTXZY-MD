let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'hadlcomande ila bghiti tsayb logo ex: .flaming2 noureddine_ouafy'
  m.reply('_tsna chwia akhoya osmhlina "afak ila t3tlna alik..._')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `© instagram.com/noureddine_ouafy`, m, false)
}
handler.help = ['flaming2'].map(v => v + ' <>')
handler.tags = ['maker']
handler.command = /^(flaming2)$/i

module.exports = handler
