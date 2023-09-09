const name = "manav"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// prefered way

const gameName = new String('manavsamcom')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-6, 8)
console.log(anotherString);

// const newStringOne = "   manav    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://manav.com/manav%20sam"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar')) // if exists T/F

// console.log(gameName.split('-'));