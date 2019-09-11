//const para = document.querySelector('p'); //first p tag
//const para = document.querySelector('.error'); // first element with class name 'error'
//const para = document.querySelector('div.error'); // first div element with class name 'error'

//console.log(para);

const paras = document.querySelectorAll('p'); // gets all the 'p' tags
//console.log(paras); //Node list not an array
//console.log(paras[2]); // 3rd item in Node list


paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);
