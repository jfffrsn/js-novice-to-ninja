const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);

    //4 is done
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText);
    } else if(request.readyState === 4) {
        console.log('could not fetch the data')
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
request.send();
