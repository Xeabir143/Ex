module.exports = {
    config: {
        name: "bal",
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
    if (event.body && event.body.toLowerCase() == "bal") return message.reply(" ~বাল উঠে নাই নাকি তোমার?? 🤖😘");
}
};