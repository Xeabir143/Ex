const { randomString, getTime, convertTime } = global.utils;
const { createCanvas } = require('canvas');
const rows = [
	{
		col: 4,
		row: 10,
		rewardPoint: 1
	},
	{
		col: 5,
		row: 12,
		rewardPoint: 2
	},
	{
		col: 6,
		row: 15,
		rewardPoint: 3
	}
];

module.exports = {
	config: {
		name: "guessnumber",
		aliases: ["guessnum"],
		version: "1.1-beta",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Game đoán số",
			en: "Guess number game"
		},
		longDescription: {
			vi: "Game đoán số",
			en: "Guess number game"
		},
		category: "game",
		guide: {
			vi: "  {pn} [4 | 5 | 6] [single | multi]: tạo một bàn chơi mới, với:\n    4 5 6 là số chữ số của số cần đoán, mặc định là 4.\n    single | multi là chế độ chơi, single là 1 người chơi, multi là nhiều người chơi, mặc định là single.\n   Ví dụ:\n    {pn}\n    {pn} 4 single\n\n   Cách chơi: người chơi trả lời tin nhắn của bot theo quy tắc sau:\n   Bạn có 10 lần đoán (4 số), 12 lần (5 số), 15 lần (6 số).\n   Sau mỗi lần đoán, bạn sẽ nhận được thêm gợi ý là số lượng chữ số đúng (hiển thị bên trái) và số lượng chữ số đúng vị trí (hiển thị bên phải).\n   Lưu ý: Số được hình thành với các chữ số từ 0 đến 9, mỗi chữ số xuất hiện duy nhất một lần và số có thể đứng đầu là 0."
				+ "\n\n   {pn} rank <trang>: xem bảng xếp hạng."
				+ "\n   {pn} info [<uid> | <@tag> | <reply> | <để trống>]: xem thông tin xếp hạng của bạn hoặc người khác."
				+ "\n   {pn} reset: reset bảng xếp hạng (chỉ admin bot).",
			en: "  {pn} [4 | 5 | 6] [single | multi]: create a new game, with:\n    4 5 6 is the number of digits of the number to guess, default is 4.\n    single | multi is the game mode, single is 1 player, multi is multi player, default is single.\n   Example:\n    {pn}\n    {pn} 4 single\n\n   How to play: the player replies to the message of the bot with the following rules:\n   You have 10 guesses (4 numbers), 12 guesses (5 numbers), 15 guesses (6 numbers).\n   After each guess, you will get additional hints of the number of correct digits (shown on the left) and the number of correct digits (shown on the right).\n   Note: The number is formed with digits from 0 to 9, each digit appears only once and the number can start with 0."
				+ "\n\n   {pn} rank <page>: view the ranking."
				+ "\n   {pn} info [<uid> | <@tag> | <reply> | <empty>]: view your or other's ranking information."
				+ "\n   {pn} reset: reset the ranking (only admin bot)."
		}
	},

	langs: {
		vi: {
			charts: "🏆 | Bảng xếp hạng:\n%1",
			pageInfo: "Trang %1/%2",
			noScore: "⭕ | Hiện tại chưa có ai ghi điểm.",
			noPermissionReset: "⚠️ | Bạn không có quyền reset bảng xếp hạng.",
			notFoundUser: "⚠️ | Không tìm thấy người dùng có id %1 trong bảng xếp hạng.",
			userRankInfo: "🏆 | Thông tin xếp hạng:\nTên: %1\nĐiểm: %2\nSố lần chơi: %3\nSố lần thắng: %4\n%5\nSố lần thua: %6\nTỉ lệ thắng: %7%\nTổng thời gian chơi: %8",
			digits: "%1 chữ số: %2",
			resetRankSuccess: "✅ | Reset bảng xếp hạng thành công.",
			invalidCol: "⚠️ | Vui lòng nhập số chữ số của số cần đoán là 4, 5 hoặc 6",
			invalidMode: "⚠️ | Vui lòng nhập chế độ chơi là single hoặc multi",
			created: "✅ | Tạo bàn chơi thành công.",
			gameName: "GAME ĐOÁN SỐ",
			gameGuide: "⏳ | Cách chơi:\nBạn có %1 lần đoán.\nSau mỗi lần đoán, bạn sẽ nhận được thêm gợi ý là số lượng chữ số đúng (hiển thị bên trái) và số lượng chữ số đúng vị trí (hiển thị bên phải).",
			gameNote: "📄 | Lưu ý:\nSố được hình thành với các chữ số từ 0 đến 9, mỗi chữ số xuất hiện duy nhất một lần và số có thể đứng đầu là 0.",
			replyToPlayGame: "🎮 | Phản hồi tin nhắn hình ảnh bên dưới kèm theo %1 số bạn đoán để chơi game.",
			invalidNumbers: "⚠️ | Vui lòng nhập %1 số bạn muốn đoán",
			win: "🎉 | Chúc mừng bạn đã đoán đúng số %1 sau %2 lần đoán và nhận được %3 điểm thưởng.",
			loss: "🤦‍♂️ | Bạn đã thua, số đúng là %1."
		},
		en: {
			charts: "🏆 | Ranking:\n%1",
			pageInfo: "Page %1/%2",
			noScore: "⭕ | There is no one who has scored.",
			noPermissionReset: "⚠️ | You do not have permission to reset the ranking.",
			notFoundUser: "⚠️ | Could not find user with id %1 in the ranking.",
			userRankInfo: "🏆 | Ranking information:\nName: %1\nScore: %2\nNumber of games: %3\nNumber of wins: %4\n%5\nNumber of losses: %6\nWin rate: %7%\nTotal play time: %8",
			digits: "%1 digits: %2",
			resetRankSuccess: "✅ | Reset the ranking successfully.",
			invalidCol: "⚠️ | Please enter the number of digits of the number to guess is 4, 5 or 6",
			invalidMode: "⚠️ | Please enter the game mode is single or multi",
			created: "✅ | Create game successfully.",
			gameName: "GUESS NUMBER GAME",
			gameGuide: "⏳ | How to play:\nYou have %1 guesses.\nAfter each guess, you will get additional hints of the number of correct digits (shown on the left) and the number of correct digits (shown on the right).",
			gameNote: "📄 | Note:\nThe number is formed with digits from 0 to 9, each digit appears only once and the number can start with