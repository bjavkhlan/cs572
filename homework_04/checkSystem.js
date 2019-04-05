const os = require("os");
const { Observable } = require("rxjs");


function checkSystem() {
    const obs$ = Observable.create((observer) => {
        observer.next("Checking your system...");
        if (os.totalmem() < 4 * 1024 * 1024 * 1024) {
            observer.next("This app needs at least 4GB of RAM");
            observer.complete();
        }
        if (os.cpus().length < 2) {
            observer.next("Processor is not supported");
            observer.complete();
        }

        observer.next("System is checked successfully");
        observer.complete();
    });

    obs$.subscribe(
        (x) => console.log(x),
        (err) => console.error(err)
    );
}

checkSystem();