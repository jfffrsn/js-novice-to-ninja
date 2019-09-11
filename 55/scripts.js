//event bubbling and delegation

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li); //puts at top
});


//const items = document.querySelectorAll('li');
//
//items.forEach(item => {
//    item.addEventListener('click', e => {
//        console.log('event in LI'); //fires this first the bubbles up to 'ul'
//        e.stopPropagation(); //stop the bubbling here. and ul never fires.
//        e.target.remove();
//    });
//});

ul.addEventListener('click', e => {
   // console.log('event in UL'); //fires this 2nd
   if(e.target.tagName === 'LI') {
    e.target.remove();
   }
});
