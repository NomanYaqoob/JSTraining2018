

function palindrome() {
    var value = prompt("write Palindrome String");
    var stringLength = value.length;
    for (var i = 0; i < stringLength / 2; i++) {
        if (value[i] !== value[stringLength - i - 1])
            return false;
    }
    return true;
}

function checkPalindrome() {
    alert(palindrome() ? 'The given Value is palindrome' : 'The given Value is not palindrome');
}


function isArmstrong() {
    var arm = 0, a, b, c, d;
    var num = Number(prompt("Write any number to check Armstrong"));

    var remains = num;
    while (remains > 0) {
        a = remains % 10;
        remains = parseInt(remains / 10); // convert float into Integer
        arm += a * a * a;
    }
    if (arm == num) {
        alert("Armstrong number");
    }
    else {
        alert("Not Armstrong number");
    }
}

var myVar = 1;


function a() {


    var myVar = 3;
    myVar = 2;
    b()
}

function b() {
    console.log(myVar);
}

a();


function calc(num1, num2, operator) {
    var result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num1 * num2;
            break;
    }
    console.log(result);
}