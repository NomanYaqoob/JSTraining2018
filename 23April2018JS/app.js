
// function greet(str, person) {
//     console.log(str);
//     return str[0] + person;
// }

// var name = 'noman';

// console.log(greet`he is \u00A9 ${name}`);

// var myName = "Noman"
// var name = `My name is 
// ${myName}`;
// console.log(name);


// ------------ Expression Interpolation
// var a = 5;
// var b = 10;
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);


//  ---- -Expressions
// var isLargeScreen = () => { return false };
// var item = { isCollapsed: true };

// const classes = `header ${isLargeScreen() ? '' :
//     (`icon-${item.isCollapsed ? 'expander' : 'collapser'}`)}`;
// console.log(classes);




// this issue

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function a() {
        // In non-strict mode, the growUp() function defines `this` 
        // as the global object (because it's where growup() is executed.), 
        // which is different from the `this`
        // defined by the Person() constructor. 
        this.age++;
        console.log(this.age);
    }.bind(this), 1000);
}

var p = new Person();


// var materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];

// console.log(materials.map(material => material.length));
// // console.log(materials.map(material => material.length));



// function a(...args) {
//     console.log(args);
// }

