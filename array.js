let prices = [20, 40, 10];

// map returns a new set of arrays after iteration, does not replace original array.
let doublePrices = prices.map(function doSomething(elem) {
    return `$${elem}`;
});

let str = doublePrices.forEach(e => {
    return console.log(`The prices for each soap by level is ${e}`);
});


// filter test for values passing a test, returns a new array of values that passes

let ages = [21, 30, 50, 100, 6, 10, 18, 2, 9];

let underEighteen = ages.filter((age) => {
    return age < 18;
});

console.log(underEighteen);

underEighteen.forEach(person => {
    let msg;
    if(person >= 18) {
        return console.log('You are allowed in this club ', person );
    } else {
        return console.log('You\'re a minor, please get out because you are  ', person);
    }
}); 