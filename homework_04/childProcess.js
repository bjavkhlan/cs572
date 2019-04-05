var fs = require("fs");

process.on("message", path => {
    
    let readStream = fs.createReadStream(path);
    readStream.on("data", chunk => {
        process.send(chunk);
    })
    readStream.on("error", (err) => {
        process.send(null);
    });
    readStream.on("end", ()=> {
        process.send(null);
    });
});
