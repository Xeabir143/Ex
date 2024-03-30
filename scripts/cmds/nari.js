const fs = require('fs');
module.exports = {
  config: {
    name: "nari",
    version: "1.0",
    author: "otineeeeyyyy",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "🧕") {
      return message.reply({
        body:"এই শহরের রূপের অহংকার করে লাভ নেই \n কারণে এই শহরের মেয়েরা টাকার জন্য বিক্রি হয় ছেলেরা না 🙂🥀\n\n˚₊· ͟͟͞͞➳❥ 𝙴𝙳𝙸𝚃𝙾𝚁(ᴀʙɪʀ)✩✧",
        attachment: fs.createReadStream("abir/nari.mp4"),
      });
    }
  }
};