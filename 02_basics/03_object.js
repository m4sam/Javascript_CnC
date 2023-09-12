// singleton by constructor
// Object.create


// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Manav",
    "full name": "Manav Sam", // dot function will not work 
    [mySym]: "mykey1", // symbol can be only acessed by sq brckts
    age: 18,
    location: "Delhi",
    email: "manav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // symbol can be only acessed by sq brckts

JsUser.email = "manav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "manav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} and this is my email - ${this.email}` );
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());