const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText = 'ninjas are awesome!'; //overrides old text
//para.innerText += ' ninjas are awesome!'; //adds to old text


const paras = document.querySelectorAll('p');

paras.forEach((para) => {
    console.log(para.innerText);
    para.innerText += ' new text';
});


const content = document.querySelector('.content');
//console.log(content.innerHTML); //html inside content div
//content.innerHTML = '<h2>this is a new h2</h2>'; //completely overwrites content
//content.innerHTML += '<h2>this is a new h2</h2>'; //appends content

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})