// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //scoreOne: 50 scoreTwo: 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //scoreOne: 100 scoreTwo: 50


//reference values

userOne = {name: 'ryu', age: 30};
userTwo = userOne;

console.log(userOne, userTwo); //{name: "ryu", age: 30} {name: "ryu", age: 30}

userTwo.age = 40;
console.log(userOne, userTwo); // changes both. {name: "ryu", age: 40} {name: "ryu", age: 40}