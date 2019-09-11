//get set sttributes

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.thenetninja.com.uk');
link.innerText = 'The Net Ninja Website';


const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

//change an attribute
mssg.setAttribute('class', 'success');

//add an attribute
mssg.setAttribute('style', 'color: green;')