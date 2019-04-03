const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const gzip = zlib.createGzip();

const bigFilePath = "./static/bigFile.mp4";
// const hugeFilePath = "./static/hugeFile.zip";
const hugeFilePath = "./static/hugeFile.mkv";
//const hugeFilePath = "./static/smallFile";

const serverSync = http.createServer((req, res) => {
  // /* Memory usage rose up to 6.4GB(3 req simultaneously) from 2.7GB */
  let file = fs.readFileSync(bigFilePath);
  res.write(file);
  res.end();
});

const serverAsync = http.createServer((req, res) => {
  /* 578.2MB   2.8GB   => 5.1GB */
  fs.readFile(bigFilePath, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

const serverStream = http.createServer((req, res) => {
  /* 578.2MB  2.7GB  2.7*/
  fs.createReadStream(hugeFilePath)
  //  .pipe(gzip)
    .pipe(res);
});

//serverSync.listen(5000, ()=> console.log("Listening on 5000"));
serverAsync.listen(5000, ()=> console.log("Listening on 5000"));
//serverStream.listen(5000, ()=> console.log("Listening on 5000"));
