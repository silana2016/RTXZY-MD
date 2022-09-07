let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://botcahx-rest-api.herokuapp.com/api/randomgambar/couplepp')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'instagram.com/noureddine_ouafy', wm, 'ذوز للتصوية الاخرى', '.ppcp', m)
conn.sendFile(m.chat, json.result.male,'pria.jpg',  'TSAWR DYAL ANIM HHH', m)

}
handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^ppcp$/i


module.exports = handler
