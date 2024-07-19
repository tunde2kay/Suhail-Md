const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_06_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0dDNvZFZsWkVMVkZLcnJ5ZlFsVms2L3hXWGxxN3VCcUNxdjBIRTNGL2pnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjY0NDcwMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0OEYzODA2MEY0REMxOTRFMUM3QTVGNDVFNjU3Q0I4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMzNjc2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjY0NDcwMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4OTdDQjYyNTZBNTBBNkQwRDVFQkMzOEZGMDM2OTI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMzNjc2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJseUNMZ0xzMFRmNlZIeE85c0hBLU1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ2MjAwZWM1LTcwMzAtNGM0Yi1hN2QxLTNhOWMwZDYxNTNlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDE4NixcbiAgICAgIDk3LFxuICAgICAgMTAsXG4gICAgICA3NSxcbiAgICAgIDE2MCxcbiAgICAgIDUsXG4gICAgICA3LFxuICAgICAgNDMsXG4gICAgICAxNTcsXG4gICAgICA3OCxcbiAgICAgIDEzNixcbiAgICAgIDE2NSxcbiAgICAgIDE2MSxcbiAgICAgIDE2OCxcbiAgICAgIDIwNCxcbiAgICAgIDEyNCxcbiAgICAgIDc1LFxuICAgICAgMzMsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTkxLFxuICAgICAgMTc0LFxuICAgICAgMjA0LFxuICAgICAgMjMzLFxuICAgICAgMjAxLFxuICAgICAgMjA0LFxuICAgICAgMTA0LFxuICAgICAgMTUxLFxuICAgICAgMjMwLFxuICAgICAgMTE4LFxuICAgICAgMTg0LFxuICAgICAgMCxcbiAgICAgIDY5LFxuICAgICAgMTk2LFxuICAgICAgMTQxLFxuICAgICAgMTQ4LFxuICAgICAgMjUsXG4gICAgICA2MCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOR1lNMzZaQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNjQ0NzAwMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidHVuZGUya2F5MVwiLFxuICAgIFwibGlkXCI6IFwiMTM2NTMzMjE4NzA5NTcxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEwwc040RUVMbUg1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2T1Z5aDdCQStmQ09GQ2hQRFR1OVpBOFVFZEVCQm1pb1AzSVlmRFA3TW5jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5oZm1ZQXRlbWRuZ3BzdVRNQ3dJcVFIbk13K2Y4dmYrNHNDU2dIYlpQRjkwS3dzT2ZnWUtoNnZ0OWE5QkpGeFBlRm5kWmNQOHdvcU9BZGp5YnMva0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImsrRHBaRFphYllON0xpQS8wWGY0dENlNFYzM0VJT3U3emtNL3lrVVNzNUdGcVFCZjViM3h2UG9Sd0xkN0cyUk5uZ1VGUzNLUVJUcFdHTEtKM3FQVGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjY0NDcwMDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMzY3NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2Qi5qc29uIjogIntcImtleURhdGFcIjpcImhmUXZDc2tWNFBwZ0wyd3FiN1dZSjlzNU1ndU0rRG94aElIZmNEU0tnZm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3MTY3NTUwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzM2NzcxODc1XCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
