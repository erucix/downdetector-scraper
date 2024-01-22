# 🫠 Local DownDetector API
Scrapes downdetector.com 🍳 using Puppeteer and Node.js and responds with JSON message. This doesn't require any subscription and works as your local server.
# 🗿 How to run?
Paste this into your terminal.
```bash
git clone https://github.com/erucix/downdetector-scraper.git
cd downdetector-scraper
npm i puppeteer
node app.js
```
```downdetector.js``` can be used as independent library to get message. For example:
```javascript
const DownDetector = require("./downdetector");
const detector = new DownDetector();

detector.detect("github");
detector.on("response", (msg)=>{
	console.log("Response: " + msg)
})
```

Furthermore to use a custom browser for pupppeteer (in case of linux) use:
```bash
export EXEC_PATH=YOUR_PATH_HERE
```
# 🏁 Note
This is in no way affiliated with downdetector.com 🍳 and thanks for looking over my project 🫡
