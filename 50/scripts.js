//Changing css styles

const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;'); //rewrties current style

console.log(title.style);
console.log(title.style.color);


title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px'; //hypens go to camel case
title.style.margin = ''; //removes property