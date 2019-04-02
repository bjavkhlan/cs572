{
  String.prototype.filterWords = function(words) {
    return this.split(/[! ]/).map(x => words.find(elem => x == elem) ? "*".repeat(x.length) : x).join(" ");
  };
  console.log("This house is nice!".filterWords(['house', 'nice']));
  /*
  Expected output: "This **** is ****!"
  */

};
