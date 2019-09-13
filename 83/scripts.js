//timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);


const mins = Math.round(diff / 1000 / 60);
console.log(mins); //differnce in minutes

const hours = Math.round(mins / 60);
console.log(hours); //differnce in hours

const days = Math.round(hours / 24);
console.log(days); //differnce in days


console.log(`the blog was written ${days} ago`);

//converting timestamps into date objects

const timestamp = 1675938474990;
console.log(new Date(timestamp));
