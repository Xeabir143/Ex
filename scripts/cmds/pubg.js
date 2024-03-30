const {createCanvas, registerFont, loadImage, Image} = require("canvas")


const fs = require("fs")
const axios = require("axios")


module.exports = {
	config: {
		name: "pubg",
		version: "1.1",
		author: "AceGun",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: ""
		},
		longDescription: {
			vi: "",
			en: ""
		},
		category: "fun",
		guide : {
      en: "{pn} <id Number> | <name> | <color>"
},
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {

let inpp = args.join(" ").split("|")
if(!inpp || inpp.length < 2 || isNaN(Number(inpp[0]))) return (message.reply("/pubg <id Number> | <name> | <color>"))

  let itm = jsn.find(e => e.id == inpp[0])
  if(!itm) return message.reply("That id doesn’t exist.")
let inp = inpp[1].trim()

  let clr = ""
  if(inpp[2]){clr = inpp[2].trim()} else{clr =itm.clr||"white"}
  console.log(clr)
  try{
         let ig = (await axios.get(encodeURI(
            itm.url), { responseType: "arraybuffer" })
    ).data;
   await registerFont(`Vampire Wars.ttf`, {
            family: "Abcd"
        });
  let cnv = await createCanvas(1080, 1080)
  let ctx = cnv.getContext("2d")
  ctx.imageSmoothingEnabled = false;
 ctx.patternQuality = 'best';
ctx.antialias = 'default';
ctx.filter = 'default';
  



let bg = await loadImage("bg.png")
let pg = await loadImage(ig)
  
        
 ctx.drawImage(bg, 0,0, 1080,1080)

var fontsize = 130;

  // lower the font size until the text fits the canvas
  do {
    fontsize--;
    ctx.font = fontsize + "pt " + "Abcd";
  } while (ctx.measureText(inp).width > cnv.width-16)
    
    // ctx.font = '130pt "Abcd"';
    
  ctx.fillStyle = clr;
ctx.textAlign = 'center';
ctx.strokeStyle = "white"
     ctx.lineWidth = 2
// ctx.strokeText(inp, cidth/2, 308)
     ctx.strokeText(inp, cnv.width/2, 432)
     ctx.strokeText(inp, cnv.width/2, 708)
    
     ctx.fillText(inp, cnv.width/2, 574)

      

    // let txt = text.split("*")
  // lower the font size until the text fits the canvas
  

  // draw the text
  
  

  ctx.drawImage(pg, 0, 0, 1080, 1080)
    
    ctx.strokeText(inp, cnv.width/2, 574)
     const imgBuffer = cnv.toBuffer('image/png') 
  


  await fs.writeFileSync(__dirname + "/tmp/asd.png", imgBuffer)
 // fs.writeFileSync('asd.png', imgBuffer)
message.reply({body:`✅Your PUBG  Avatar
❏ID: ${itm.id}
❏BG text: ${inp.trim()}
❏Color: ${clr}`,attachment:fs.createReadStream(__dirname + "/tmp/asd.png")})
   
  }catch(e){console.log(e)}
}
};

   let jsn = 
[
  {
    "id": 1,
    "url": "https://i.ibb.co/546bkNt/Picsart-23-05-19-09-31-50-027.png",
    "clr": "#383f29"
  },
  {
    "id": 2,
    "url": "https://i.ibb.co/mS9FfLH/Picsart-23-05-19-09-32-44-752.png",
    "clr": "#033b74"
  },
  {
    "id": 3,
    "url": "https://i.ibb.co/VChdTpq/Picsart-23-05-19-09-30-53-908.png",
    "clr": "#326a97"
  },
  {
    "id": 4,
    "url": "https://i.ibb.co/nQ93jvy/Picsart-23-05-19-09-30-06-927.png",
    "clr": "#7c0000"
  },
  {
    "id": 5,
    "url": "https://i.ibb.co/PgzyMpH/Picsart-23-05-19-09-28-53-306.png",
    "clr": "#7c0000"
  },
  {
    "id": 6,
    "url": "https://i.ibb.co/1spfX8b/Picsart-23-05-19-09-27-58-306.png",
    "clr": "#8c1c4c"
  },
  {
    "id": 7,
    "url": "https://i.ibb.co/6g54VMb/Picsart-23-05-19-09-26-09-345.png",
    "clr": "#7c0000"
  },
  {
    "id": 8,
    "url": "https://i.ibb.co/xz7Z682/Picsart-23-05-19-09-25-32-644.png",
    "clr": "#7c0000"
  },
  {
    "id": 9,
    "url": "https://i.ibb.co/YkPFLwS/Picsart-23-05-19-09-27-10-258.png",
    "clr": "#7c0000"
  },
  {
    "id": 10,
    "url": "https://i.ibb.co/JjV76tF/Picsart-23-05-19-09-24-27-987.pngg",
    "clr": "#383e02"
  },
  {
    "id": 11,
    "url": "https://i.ibb.co/rHSHQMf/Picsart-23-05-19-09-21-37-249.png",
    "clr": "#dea438"
  },
  {
    "id": 12,
    "url": "https://i.ibb.co/qY9fNhF/Picsart-23-05-19-09-20-32-680.png",
    "clr": "#383e02"
  },
  {
    "id": 13,
    "url": "https://i.ibb.co/zrkrbBG/Picsart-23-05-19-09-22-54-571.png",
    "clr": "#075fbc"
  },
  {
    "id": 14,
    "url": "https://i.ibb.co/YcVJsM0/Picsart-23-05-19-09-22-08-345.png",
    "clr": "#c20200"
  },
  {
    "id": 15,
    "url": "https://i.ibb.co/rHSHQMf/Picsart-23-05-19-09-21-37-249.png",
    "clr": "#326a97"
  },
  {
    "id": 16,
    "url": "https://i.ibb.co/qY9fNhF/Picsart-23-05-19-09-20-32-680.png",
    "clr": "#dea438"
  },
  {
    "id": 17,
    "url": "https://i.ibb.co/zrkrbBG/Picsart-23-05-19-09-22-54-571.png",
    "clr": "#326a97"
  },
  {
    "id": 18,
    "url": "https://i.ibb.co/YcVJsM0/Picsart-23-05-19-09-22-08-345.png",
    "clr": "#0e0bbb"
  },
  {
    "id": 19,
    "url": "https://i.ibb.co/hcyfs8h/Picsart-23-05-19-09-15-07-764.png",
    "clr": "#857773"
  },
  {
    "id": 20,
    "url": "https://i.ibb.co/52G4rsq/Picsart-23-05-19-09-11-52-958.png",
    "clr": "#f3d40c"
  },
  {
    "id": 21,
    "url": "https://i.ibb.co/pKwJ8db/Picsart-23-05-19-09-12-27-121.png",
    "clr": "#65372d"
  },
  {
    "id": 22,
    "url": "https