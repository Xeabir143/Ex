module.exports = {
    config: {
        name: "jan",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "jan") return message.reply(" 🤖Dear,💌 হুম জান বলো কি বলবা-!!❤️✌️");
}
};