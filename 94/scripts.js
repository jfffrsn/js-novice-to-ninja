const getTodos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();

    });

};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected', err);
});




//callback hell
//getTodos('todos/luigi.json', (err, data) => {
//    console.log(data);
//    getTodos('todos/mario.json', (err, data) => {
//        console.log(data);
//        getTodos('todos/shaun.json', (err, data) => {
//            console.log(data);
//        });
//    });
//});


//promise example

//const getSomething = () => {
//
//    return new Promise((resolve, reject) => {
//        //fetch something
//        resolve('some data');
//        //reject('some error');
//    });
//
//};

//this is messy
//getSomething().then((data) => {
//    console.log(data);
//}, (err) => {
//    console.log(err);
//});

//this is cleaner
//getSomething().then(data => {
//    console.log(data);
//}).catch(err => {
//    console.log(err);
//})
