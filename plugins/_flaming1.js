let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join('hadlcomande ila bghiti tsayb logo ex: .logo1 noureddine_ouafy ').split('|')
  if (!args[0]) throw ''
  m.reply('__tsna chwia akhoya osmhlina 3afak ila t3tlna alik..._')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `© instagram.com/noureddine_ouafy `, m, false)
}
handler.help = ['logo1'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo1)$/i

module.exports = handler
