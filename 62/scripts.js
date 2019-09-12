//basic form validation

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents default action of an event

    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-z]{6,12}$/;

    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        //feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }

});
