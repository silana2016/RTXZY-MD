const { facebookdl, facebookdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `هاد الامر الا بغيتي تيليشارجي شي فيديو من فيسبوك دير مثلا بحال هاكا  ${usedPrefix}${command} https://www.facebook.com/100063533185520/posts/510616167732818/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `© https://instagram.com/noureddine_ouafy`, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler
