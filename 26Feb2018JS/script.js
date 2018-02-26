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






var runAfterSec = function () {
    alert("I am running Asyncrounously");
    var arr = [];
    var abc = 22;
    return abc;
}
console.log(setTimeout(runAfterSec, 3000));


function showDate() {
    var date = new Date();
    alert("Time is:" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br/>");
}


var uniqueIntevalKey = setInterval(showDate, 1000);


clearInterval(uniqueIntevalKey);






