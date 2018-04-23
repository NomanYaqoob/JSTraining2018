/**
 * The this keyword does not refer to the function in which it is used or it’s scope. It refers to the object on which 
 * a function is being executed and depends entirely on the call-site of the function.
 */

// function testKey() {
//     console.log(this); // refers to window object
// }

// testKey();


// function testVar() {
//     console.log(this.name);
// }


// var name = 'Warden';
// testVar();

// var obj = new testVar();


// Implicit binding
var user = {
    name: "Wallmark",
    getName: function () {
        console.log("Name is ", this.name);
    }
}

// user.getName();
var getUserName = user.getName.bind(user);
getUserName();

// userFunc();


var myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', user.getName.bind(user));



/**
 * Another Stuff found on the internet related to Bind
 */

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function () {
    console.log(this.getPokeName() + 'I choose you!');
}

var pokemonName = function (hobby, love) {
    console.log(this.getPokeName() + 'loves ', love, 'and do ', hobby);
}

// var bindedVersion = pokemonName.bind(pokemon);
// bindedVersion(); // what will happen ???


// pokemonName.call(pokemon, 'Algorithms', 'programming');
pokemonName.apply(pokemon, ['Algorithms', 'programming']);


