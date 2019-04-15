const { fork } = require("child_process");

const child_process = fork("./crybaby.js");
child_process.send("this message");
child_process.on("message", (msg) => console.log(msg));

