//async and await
//async always returns a promise

//fetch('todos/luigi.json').then((response) => {
//    console.log('resolved', response);
//    return response.json();
//}).then(data => {
//    console.log(data);
//}).catch((err) => {
//    console.log('rejected', err);
//});


const getTodos = async () => {

    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;

};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved', data)); //this is\non-blocking

console.log(3);
console.log(4);
