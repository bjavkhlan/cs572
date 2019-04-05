const http = require("http");
const { fork } = require("child_process");

const server = http.createServer();

server.on("request", (req, res) => {
    const childProcess = fork("testChildProcess2.js");
    childProcess.send("start");
    childProcess.on("message", sum => {
        res.end(`Sum is ${sum}`);
    });
});
server.listen(5000, () => console.log("Listening on 5000"));