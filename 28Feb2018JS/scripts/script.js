

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