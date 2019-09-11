//get an element by ID
const title = document.getElementById('page-title'); // '#' implied
console.log(title);


//get elements by their class name
const errors = document.getElementsByClassName('error'); // '.' implied
console.log(errors); //HTML collection. can't use forEach on HTML collection.
console.log(errors[0]); //first element with classname 'error'

//get elements  by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]); // 2nd para