const myserver = require('http');

myserver.createServer((rrr,ttt)=>{
    ttt.write('Hello There!!!')
    ttt.end()
}).listen(8888, ()=>console.log('listining on 8888 oka?'))