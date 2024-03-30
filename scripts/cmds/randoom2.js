const axios = require('axios');
const request = require('request');
const fs = require('fs');

module.exports = {
  config: {
    name: 'redroom2',
    aliases: [],
    version: '2.0',
    author: 'kshitiz & John Lester',
    countDown: 60,
    role: 2,
    shortDescription: '',
    longDescription: 'redroom version 2.0',
    category: 'nsfw',
    guide: '{p}{n} redroom2',
  },
  onStart: async function ({ api, event }) {
    
    api.sendMessage({
      body: 'Loading video pls wait upto 5min🥰...',
    }, event.threadID);

    var red = [
      "https://.api-johnlester.repl.co",
      "https://-1.api-johnlester.repl.co",
      "https://-2.api-johnlester.repl.co",
      "https://.api-johnlester.repl.co",
      "https://-1.api-johnlester.repl.co",
      "https://-2.api-johnlester.repl.co",
      "https://.api-johnlester.repl.co",
      "https://-1.api-johnlester.repl.co",
      "https://-2.api-johnlester.repl.co"
    ];

    var redroom = red[Math.floor(Math.random() * red.length)];

    axios.get(redroom)
      .then(async (res) => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let count = res.data.count;

        let callback = function () {
          
          api.sendMessage({
            body: 'Video:',
            attachment: fs.createReadStream(__dirname + `/cache/kanna.${ext}`)
          }, event.threadID, () => {
            
            fs.unlinkSync(__dirname + `/cache/kanna.${ext}`);
          });
        };

        request(res.data.data)
          .pipe(fs.createWriteStream(__dirname + `/cache/kanna.${ext}`))
          .on('close', callback);
      })
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        
        api.sendMessage({
          body: 'An error occurred while fetching the video.',
        }, event.threadID);
      });
  }
};