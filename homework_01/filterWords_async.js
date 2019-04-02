{
  String.prototype.filterWords = async function(words) {
    try {

    } catch(err) {

    }
    new Promise((resolve, reject) => {
      resolve(this.split(/[! ]/).map(x => words.find(elem => x == elem) ? "*".repeat(x.length) : x).join(" "));
    }).then(data => console.log(data));
  };
  "This house is nice!".filterWords(['house', 'nice']);
};
