//more DOM events

//copy - when users copies the text
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright');
});



//mousemove - when user moves mouse
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
});

//wheel event - when user scrolls with mouse wheel
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});