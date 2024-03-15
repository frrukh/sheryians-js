// HOISTING
// Hoisting - the variables and functions (and classes) are hoisted i.e their declarations are moved toward top of the code.
// simple -- every declaration is moved to the top of the scope while compilation is called hoisting.

    // there are two things while creating a variable:
        // declaration : var a;
        // initialization : a = 3;
            // both are written like : var a = 3;

    // when we create a variable like : var a = 3; js interpreter converts this into two lines.
        // 1: var a;  -- here the value of a is undefined.
        // 1: a = 3;  -- here the value of a is updated to 3.

    // after that the interpreter make the declaration part to the top of the scope.so if we print a before declaring the variable using "var" the js interpreter prints undefined instead of showing any error like 'ReferenceError: Cannot access 'b' before initialization'

    console.log(a)    // undefined
    var a = 3;
    
    // this is same in functions.functions are shifted to the top of the scope while compilation.

sum(1,2) // 3 
function sum(a, b) {
    console.log(a+b)
}

// ********************
// Q: what is the difference between undefined and not-defined
    // A: undefined means the declaration is done but initialization is not done.
console.log(b) // undefined (due to hoisting)
var b = 3;
    // A: not-defined means the declaration is not done.
// console.log(c) // ReferenceError: c is not defined
// ********************


// TWIST:
// in case of let and const the hoisting works differently.
    // in let and const the hoisting works like : it moves the variable to the top of their scope but not declare the variable and also not initialize it.
        // so, take care of this.
    
// console.log(d) // ReferenceError: Cannot access 'd' before initialization
let d = 4;

// console.log(e) // ReferenceError: Cannot access 'e' before initialization
let e = 3;


// ********************
// Q: if variables declared with let and const are not declared through hoisting then what is the advantage of hoisting for let and const?
    // A: in case of let and const the hoisting only makes sure to check if the variable is available or not to help out the programmer to code more effectively.
// ********************
