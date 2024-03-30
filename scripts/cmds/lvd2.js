const axios = require("axios");
const fs = require("fs");
const os = require("os");
const path = require("path");


const sentVideos = [];

module.exports = {
  config: {
    name: "lvd2",
    version: "1.0",
    role: 0,
    author: "𝗞𝘀𝗵𝗶𝘁𝗶𝘇",
    shortDescription: "Send a random lyrical video",
    longDescription: "Send a random lyrical video",
    category: "𝗙𝗕𝗚𝗥𝗢𝗨𝗣",
    dependencies: {
      axios: "",
    },
  },
  onStart: async function ({ api, event }) {
    try {

      const triggerMessageID = event.messageID;


      const loadingMessage = await api.sendMessage(
        "𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗿𝗲𝗾𝘂𝗲𝘀𝘁..|| ✅",
        event.threadID
      );

      const groupId = "755084875237654";
      const accessToken = "EAAD6V7os0gcBOx6n4Mq5OnOnfHzZAOWGxNTDLuSaMchEHh38KWg0aKRjrE8ZBrOKZA2TesFOD0siTtDQkqOhrj0IIdXZATghF7Dj2uHvQU1H8ZBVpK19rNk6NBFZAx0Hu9e7NUT3hLUpkA0leyChiFeGLv5rpG4C95CPWjpwcMwDDEULQVPnlCfHkMzPg0llCF8QZDZD";
      const apiVersion = "v18.0";
      const groupUrl = `https://graph.facebook.com/${apiVersion}/${groupId}/feed?access_token=${accessToken}&fields=attachments{url,type},source`;

      const response = await axios.get(groupUrl);

      console.log("Response Data:", response.data);

      const posts = response.data.data || [];

      console.log("Posts:", posts);

      const videos = posts
        .filter((post) => post.source && typeof post.source === "string")
        .map((post) => post.source);

      console.log("Videos:", videos);

      if (videos.length === 0) {

        await api.sendMessage(
          "No video links found in the group.",
          event.threadID,
          loadingMessage.messageID
        );
      } else {

        const unsentVideos = videos.filter(video => !sentVideos.includes(video));

        if (unsentVideos.length === 0) {

          await api.sendMessage(
            "All videos from the group have been sent before.",
            event.threadID,
            loadingMessage.messageID
          );
        } else {

          const randomVideo =
            unsentVideos[Math.floor(Math.random() * unsentVideos.length)] + "&dl=1";

          const tempDir = path.join(os.tmpdir(), "fb_videos");
          if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
          }

          const randomFileName = `video_${Date.now()}.mp4`;

          const filePath = path.join(tempDir, randomFileName);

          const videoResponse = await axios({
            method: "GET",
            url: randomVideo,
            responseType: "stream",
          });

          videoResponse.data.pipe(fs.createWriteStream(filePath));

          videoResponse.data.on("end", async () => {
            if (fs.existsSync(filePath)) {

              await api.sendMessage(
                {
                  body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗹𝘆𝗿𝗶𝗰𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 🎵💐",
                  attachment: fs.createReadStream(filePath),
                },
                event.threadID,
                triggerMessageID
              );


              sentVideos.push(randomVideo);
            } else {
              console.error("File does not exist:", filePath);

              await api.sendMessage(
                "An error occurred while fetching the video. Please try again later.",
                event.threadID,
                loadingMessage.messageID
              );
            }
          });

          videoResponse.data.on("error", async (err) => {
            console.error("Error during video download:", err);

            await api.sendMessage(
              "An error occurred while fetching the video. Please try again later.",
              event.threadID,
              loadingMessage.messageID
            );
          });
        }
      }
    } catch (error) {
      console.error("[ERROR]", error);

      await api.sendMessage(
        "An error occurred while fetching the video links.",
        event.threadID
      );
    }
  },
};