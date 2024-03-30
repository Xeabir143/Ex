 const axios = require('axios');

module.exports = {
  config: {
    name: "fbtoken",
    version: "1.0",
    author: "TASHRIF",
    countdown: 10,
    role: 2,
    Category: "other",
    usages: "[ uid ] [password]",
  },
  onStart: async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let uid = args[0];
    let pass = args[1];
    
    if (!uid || !pass) {
      api.sendMessage(`missing input!\sage: ${global.config.PREFIX}fbtoken [ uid ] [ password ]`, threadID, messageID);
      return;
    }
    
    api.sendMessage("Please wait...", threadID, messageID);
    
    try {
      const response = await axios.get(`https://hayuphahahhs.hazeyy.repl.co/login?email=${email}&password=${password}`);
      const eaad = response.data.tokenData.message.data.access_token_eaad6v7;
      
      api.sendMessage(`𝗮𝗰𝗰𝗲𝘀𝘀_𝘁𝗼𝗸𝗲𝗻_𝗲𝗮𝗮𝗱𝟲𝘃𝟳: ${eaad}`, threadID, messageID);
      
    } catch (e) {
      return api.sendMessage(`An error: ${e.message}`, threadID, messageID);
    }
  }
};