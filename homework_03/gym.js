const EventEmitter = require("events");

class Gym extends EventEmitter {
  constructor() {
    super();
    this.on("boom", ()=> console.log("Athlete is working out"));
    setInterval(()=> this.emit("boom"), 1000);
  }
}

const gym = new Gym();
