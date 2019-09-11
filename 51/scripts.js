//add remove classes from elements

// const content = document.querySelector('p');
//
// console.log(content.classList);
//
// content.classList.add('error'); //adds class
//
// content.classList.remove('error'); //removes class
//
// content.classList.add('success'); //adds class


const paras = document.querySelectorAll('p');

paras.forEach(p => {
    //console.log(p.innerText); //innerText just gets visible text
    console.log(p.textContent); //textContent gets all text visible/non-visible
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if(p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

//toggle classes

const title = document.querySelector('.title');

title.classList.toggle('test'); //adds 'test'
title.classList.toggle('test'); //removes 'test'
