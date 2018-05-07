function multiply(a, b = 1) {
    return a * b;
}
// console.log(multiply(99, 9));
// console.log(multiply(99));



function test(num = 1) {
    console.log(typeof num);
}


function callSomething(thing = something) {
    return thing();
}

function something() {
    return 'sth';
}

callSomething();  //sth


function f(a = go(), go) {
    // go();
    go();
    function go() { return ':P'; }
}

// console.log(f(23, function go() {
// }));

// var iterable = [10, 20, 30];

// for (var value of iterable) {
//   value += 1;
//   console.log(value);
// }

// let myIterable = { a: 'boo' };

// for (let value in myIterable) {
//     console.log(value);
// }


// (function() {
//     for (var argument of arguments) {
//       console.log(argument);
//     }

//   })();

//   var arr = [];



Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i); // logs 0, 1, 2, "foo"
    }
}

for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
}