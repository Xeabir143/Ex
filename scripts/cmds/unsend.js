 module.exports = {
	config: {
		name: "unsend",
		version: "1.0",
		author: "Aryan Chauhan 🍒",
		countDown: 0,
		role: 0,
		shortDescription: {
			vi: "Gỡ tin nhắn của bot",
			en: "Unsend bot's message"
		},
		longDescription: {
			vi: "Gỡ tin nhắn của bot",
			en: "Unsend bot's message"
		},
		category: "box chat",
		guide: {
			vi: "reply tin nhắn muốn gỡ của bot và gọi lệnh {pn}",
			en: "reply the message you want to unsend and call the command {pn}"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng reply tin nhắn muốn gỡ của bot"
		},
		en: {
			syntaxError: "⛔ 𝗪𝗥𝗢𝗡𝗚 𝗨𝗦𝗘:\n\nPlease reply the message you want to unsend"
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
		if (!event.messageReply || event.messageReply.senderID != api.getCurrentUserID())
			return message.reply(getLang("syntaxError"));
		message.unsend(event.messageReply.messageID);
	}
};