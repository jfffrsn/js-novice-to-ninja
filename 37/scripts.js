//object literals

let user = {
    name: 'crystal', // this is a key value pair
    age: 30,
    email: 'crystal@thenetnija.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);


user.age = 35;
console.log(user.age); //dot notation



console.log(user['location']); //square bracket notation
user['name'] = 'chun-li';
console.log(user['name']);


console.log(typeof user); //just showing type of