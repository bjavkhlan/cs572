function giveMePizza() {
    return new Promise(function (IAmGoingToMake, SorryNoPizza) {
        setTimeout(() => {
            IAmGoingToMake(5)
        }, 5000);
    });
}

giveMePizza()
    .then((num) => {
        return num + 5;
    }).then((number2) => {
        console.log(number2 * 10)
    }
    ).catch((pizzaName) => {
        console.log('Oh nooooooo no ' + pizzaName)
    })
console.log('I will continue my life, until the pizza is ready')