const { fork } = require("child_process");

const cry = function() {
    // cry 
    for (let i = 0; i < 1e9; i++);
};
process.on("message", (msg) => {
    process.send("got message: " + msg);
})
process.send('here');
cry();
process.send('here');

const child_process = fork("./childchild.js");
child_process.on("message", msg => console.log("on child: " + msg));


