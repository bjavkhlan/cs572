const { fork } = require("child_process")
process.send("from child2");

console.log("inside child2");
const child = fork("child3.js");
child.on("message", msg => console.log("on child2: " + msg));