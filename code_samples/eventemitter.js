//import
const EventEmitter = require('events');

//extend
class Logger extends EventEmitter {
    constructor() {
        super()
    }
}

//init
const logger = new Logger();

//addListener
logger.on('hello', () => console.log('Someone said Hello!!!'));

//emit
setTimeout(() => logger.emit('hello'), 3000)






