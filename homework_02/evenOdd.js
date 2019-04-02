{
  Array.prototype.even = function() {
    // let prom = new Promise((resolve, reject) => {
    //   resolve(this.filter(x => x%2 === 0));
    // });
    // prom.then(data => console.log(data));
    process.nextTick(() => {
      console.log(this.filter(x => x%2 === 0));
    })
  };

  Array.prototype.odd = function() {
    setImmediate(() => {
      console.log(this.filter(x => x%2 === 1));
    })
  };

  console.log("start");
  [1, 2, 3, 4, 5, 6, 7, 8].even();
  [1, 2, 3, 4, 5, 6, 7, 8].odd();
  console.log("end");
};
