const fs = require('fs');
module.exports = {
  config: {
    name: "vai",
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
    if (event.body && event.body.toLowerCase() === "vai") {
      return message.reply({
        body: "প্রেম করাইয়া দিলে ২৫ টাকা দিমু <🙃😅\n Editor : Aminul Sordar ",
        attachment: fs.createReadStream("abir/vai.mp4"),
      });
    }
  }
};