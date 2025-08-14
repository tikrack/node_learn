const http = require('http');
const fs = require('fs');

function processView(fileName) {
    return "./html/" + (fileName.trim() === "" ? "index" : fileName.trim()) + ".html"
}

const server = http.createServer((req, res) => {
    const fileName = req.url.substring(1)

    if (fileName.split(".").length > 1) {
        return;
    }

    const html = fs.readFileSync(processView(fileName), 'utf8')

    res.setHeader("Content-Type", "text/html");
    res.write(html)

    res.end()
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on 8000...");
});