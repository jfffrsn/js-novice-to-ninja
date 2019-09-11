//event basics click events

//const button = document.querySelector('button');
//
//button.addEventListener('click', () => {
//    console.log('you clicked me');
//});



const items = document.querySelectorAll('li'); // gets node list of 'li' tags

items.forEach(item => {
    item.addEventListener('click', e => {
        //console.log('item clicked')
        //console.log(e); //e is event
        //console.log(e.target); //target is the one we clicked on
        //console.log(item); //does the same as the above. but above is preferred.
        e.target.style.textDecoration = 'line-through';
    });
});
