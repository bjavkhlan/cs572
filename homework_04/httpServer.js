const http = require("http");
const url = require("url");
const { fork, exec } = require("child_process");

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const path = urlObj.query.url || "";
    
    if (urlObj.query.ls) {
        exec("ls " + urlObj.query.ls, (err, stdout, stderr) => {
            res.end(stdout);
        });
    } else {

        const childProcess =  fork("childProcess.js");
        childProcess.send(path);
        childProcess.on("message", chunk => {
            if (chunk === null) res.end();
            else res.write(Buffer.from(chunk));
        })
    }
});
server.listen(5000, ()=> console.log("listening on 5000"));
