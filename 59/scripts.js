//submit events
//attach event listener to the form itself not the submit button.

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents default action of an event
    //console.log(username.value);
    console.log(form.username.value); //uses the ID
});