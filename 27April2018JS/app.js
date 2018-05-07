
// https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373

// Maps
var myMapDict = new Map([['Name', 'Noman'], ['age', 25]]);


var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function () { };

// setting the values
myMap.set('a string', "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function () { }) // undefined, because keyFunc !== function () {}

'use strict'
// NaN are indistinguishable
// var myMap = new Map();
// myMap.set(NaN, 'not a number');

// myMap.get(NaN); // "not a number"

// var otherNaN = Number('foo');
// myMap.get(otherNaN); // "not a number"




var obj = {
    name: "Noman",
    age: "23",
    address: "address",
    contact: "contact"
};
console.log(obj);
for (let item of Object.keys(obj)) {
    console.log(item);
}



function findSecondHighest(array) {
    var highest = 0;
    var lastHighest = 0;
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            lastHighest = highest;
            highest = array[i];
        } else if (lastHighest < array[i] || highest == lastHighest) {
            lastHighest = array[i];
        }
    }
    console.log('second', lastHighest);
}


function anagram(firstVal, secondVal) {
    firstVal = firstVal.split('').sort();
    secondVal = secondVal.split('').sort();
    return firstVal.join('') === secondVal.join('');
}


function palindrome(value) {
    for (var i = 0; i < value.length / 2; i++) {
        if (value[i] !== value[value.length - i - 1]) {
            return false;
        }
    }
    return true;
}


function postData() {
    var url = 'https://jsonplaceholder.typicode.com/posts';
    var data = {
        title: 'JavasScript Class',
        body: 'Noman Class',
        userId: 1
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


