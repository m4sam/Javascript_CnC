//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Manav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/* Primitive Datatypes
    1. Number => number
    2. BigInt => bigint
    3. null => object
    4. undefined => undefined
    5. Boolean => boolean
    6. Symbol => symbol
    7. String => string

    Non-Primitive Datatypes (Reference Datatypes)
    1. Array => object
    2. Object => object
    3. Function => function

*/
// https://262.ecma-international.org/5.1/#sec-11.4.3
// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution


// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)
let email = "manav@google.com"
let myName = "Manav"
let anotherName = myName
anotherName = "Sam"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "manav@google.com",
    upi : "manav@apl"
}

let userTwo = userOne
userTwo.email = "sam@google.com"

console.log(userOne.email)
console.log(userTwo.email)