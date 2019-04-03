const { of, from } = require('rxjs');
const { flatMap, map, reduce } = require('rxjs/operators');


String.prototype.filterWords = function(words) {
  // let observable$ = from(this.split(/[! ]/))
  // .pipe(
  //   map( x => words.find(word => x === word) ? "*".repeat(x.length) : x),
  //   reduce( (total, current) => total + " " + current )
  // );
  let observable$ = of(this)
  .pipe(
    flatMap( x => from(x.split(/[! ]/)) ),
    map( x => words.find(word => x === word) ? "*".repeat(x.length) : x),
    reduce( (total, current) => total + " " + current )
  );
  observable$.subscribe( x => console.log(x) );
}

console.log("start");
"This house is nice!".filterWords(['house', 'nice']);
console.log("end");
