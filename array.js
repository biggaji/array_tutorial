let prices = [20, 40, 10];

// map returns a new set of arrays after iteration, does not replace original array.
let doublePrices = prices.map(function doSomething(elem) {
    return elem * 2;
});

console.log(doublePrices);

// filter test for values passing a test, returns a new array of values that passes

let ages = [21, 30, 50, 100, 6, 10, 18, 2, 9];

let underEighteen = ages.filter(function (age) {
    return age < 18;
});

console.log(underEighteen);