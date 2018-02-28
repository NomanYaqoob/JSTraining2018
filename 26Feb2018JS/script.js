// var daysofWeek = "Saghht";
// switch (daysofWeek) {
//     case "Sat":
//     case "Sun":
//         alert("Whopee!");
//         break;
//     case "Fri":
//         alert(":D!");
//         break;
//     default:
//         alert("Sorry")
// }

// // regular functions
// function isOdd(value) {
//     return value % 2 !== 0;
// }

// // anonymous function
// var isEven = function (value) {
//     return value % 2 === 0;
// }






// var runAfterSec = function () {
//     alert("I am running Asyncrounously");
//     var arr = [];
//     var abc = 22;
//     return abc;
// }
// console.log(setTimeout(runAfterSec, 3000));


// function showDate() {
//     var date = new Date();
//     alert("Time is:" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br/>");
// }


// var uniqueIntevalKey = setInterval(showDate, 1000);


// clearInterval(uniqueIntevalKey);


function fabonacci(value) {
    var a = 0, b = 1;
    var series = [b];
    var x;
    while (value !== 0) {
        x = a + b;
        series.push(x);
        a = b;
        b = x;
        value--;
    }
    return series;
}



//  Javascript supports Dynamic Typing, ie you dont need to tell the variable which 
// type of vairable you are going to declare and it figures out during execution

// PRIMITIVE TYPES:
// A type of Data that represents a single value (not an object)
// 6 Types: undefined, null, boolean, number, string, symbol









