function asyncCall(value, cb) {
  if (value !== 'CS572') {
    // return cb(value);
    return process.nextTick(cb, value);
  }
}

function log(msg) {
  console.log(msg);
}

asyncCall('World', log)
console.log('Hello!');