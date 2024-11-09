module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "nayan",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
  hours = Math.floor(time / (60 * 60)),
  minutes = Math.floor((time % (60 * 60)) / 60),
  seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝚃𝙰𝙼𝙸𝙼 𝚇𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝙸𝚂𝙻𝙰𝙼
𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝚁𝙰𝙹𝚂𝙷𝙰𝚂𝙷𝙸
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝙼𝙰𝙻𝙴
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝚂𝙸𝙽𝙶𝙴𝙻
𝐖𝐨𝐫𝐤        : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 𝐈𝐧𝐛𝐨𝐱
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/itsmetamim1.0 `,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
  fs.unlinkSync(__dirname + "/cache/1.png"));  
    return request(encodeURI(`https://graph.facebook.com/100076339585458/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 };
