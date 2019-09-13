//dates & times


const now = new Date();

console.log(now);
console.log(typeof now); //object


// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The new keyword does the following things:
//
// * Creates a blank, plain JavaScript object;
// * Links (sets the constructor of) this object to another object;
// * Passes the newly created object from Step 1 as the this context;
// * Returns this if the function doesn't return its own object.


//year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth()); //get integer. so sept is 8
console.log('getDate:', now.getDate()); //day of month
console.log('getHours:', now.getHours());  // day of week. so friday is 5. sunday is 0.
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());


//timestamps
//The UNIX timestamp is an integer that represents the number of seconds elapsed since January 1 1970.
//The timestamp in JavaScript is expressed in milliseconds.
console.log('timestamp:', now.getTime());


//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
