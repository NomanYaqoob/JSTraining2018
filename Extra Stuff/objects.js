"use strict"; // to show defineProperty writable functionality
var obj = {
    username: "Noman",
    email: "noman.yaqoob@tenpearls.com",
    desgination: "Software Dev."
}
// var obj2 = Object.assign({}, obj); // inorder to show the difference between Object.is

// var obj2 = obj;
Object.defineProperty(obj, "age", {
    value: 24,
    writable: false
});


console.log('obj', obj);

// console.log(Object.is(obj, obj2));

var newObj = Object.assign({}, obj);
var obj1 = obj;

console.log(Object.is(obj1, obj));


