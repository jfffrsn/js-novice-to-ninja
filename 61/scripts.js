//testing regex patterns


const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents default action of an event
    //console.log(username.value);
    console.log(form.username.value); //uses the ID
});


//testing RegEx
//regular expression is contained in 2 forward slashes
const username = 'shaunp123';
const pattern = /^[a-z]{6,}$/;  //a-z at least 6 characters long

//et result = pattern.test(username);
//
//if(result) {
//   console.log('regex test passed :)');
// else {
//   console.log('regex test failed :(');
//}


let result = username.search(pattern);
console.log(result); //-1 if no match otherwise get position of match
