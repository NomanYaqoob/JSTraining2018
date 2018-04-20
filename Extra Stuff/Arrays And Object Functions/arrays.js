var users = [
    { username: "Noman Yaqoob", age: 20, designation: "Software Dev." },
    { username: "Owais Kalam", age: 32, designation: "Lead Software Dev." },
    { username: "Imaad Abdul Jabbar", age: 25, designation: "Sr. Software Dev." },
    { username: "Waqas khan", age: 40, designation: "Architech." }
];

// MAP
// var ages = users.map(function (user,index) {
//     return user.age + 3;
// });
// console.log("ages", ages);

// var userWithAges = users.map(function (user) {
//     return { name: user.username, age: user.age };
// });
// console.log("user With their Ages", userWithAges);


// // Filter 
// var agesFilter = users.filter(function (user) {
//     return user.age < 30;
// })
// console.log(agesFilter);


// var newArr = new Array(2, 3, 4, 5); // users array of object
// var newArrEmpty = new Array(); // []
// var newArrWithOneValue = new Array("10"); // ["323"]
// var newArrEmptyWithLength = new Array(10); // [10xEmptyCells]
// console.log('newArr', newArr)


// users.forEach(function (user, index) {
//     console.log('foreach: ', index, ' ', user.designation);
// });
// // difference between .Map and .ForEach



// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];

// console.log('concat: ', array1.concat(array2));


var res = users.reduce(function (previous, current) {
    return previous + current.age;
}, 0);
console.log(res);
