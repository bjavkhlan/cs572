{
  String.prototype.filterWords = async function(words) {
    const promise = new Promise((resolve, reject) => {
      resolve(this.split(/[! ]/).map(x => words.find(elem => x == elem) ? "*".repeat(x.length) : x).join(" "));
    });
    try {
      const res = await promise;
      console.log(res);
    } catch(err) {
      console.error(err);
    }
  };
  "This house is nice!".filterWords(['house', 'nice']);
};
