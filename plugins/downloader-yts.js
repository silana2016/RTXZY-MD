let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw '.ytseach achno ktb asahbi dakchi li baghi t9lb alih f youtube 😒?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = [''].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools', 'internet', 'downloader']
handler.command = /^yts(earch)?$/i

module.exports = handler
