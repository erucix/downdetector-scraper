const http = require("http")
const DownDetector = require("./downdetector")
const detector = new DownDetector()

const port = 3333

const server = http.createServer((req, res) => {
    const site = req.url.replace("/", "")
    if (site && site != "favicon.ico") {
        detector.detect(site)
        detector.on("response", ([code, message]) => {
            if (code != 200) {
                res.writeHead(404, "Site not mentioned")
                res.end()
            } else {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                })
                res.end(JSON.stringify(message))
            }
        })
    } else {
        res.writeHead(200)
        res.end("SITE NOT MENTIONED :)")
    }
})

server.on("connection", () => {
    console.log("[+] New Connection")
})

server.listen(port, (err) => {
    if (err) {
        console.log("ERROR \n" + err)
    } else {
        console.log("Server on port ", port)
    }
})