//object literals

//method just a function defined in an object

let user = {
    name: 'crystal', // this is a key value pair
    age: 30,
    email: 'crystal@thenetnija.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },
    //logout: function() {
    logout() { //shorter version of the above
        console.log('the user logg out');
    },
    //logBlogs: function() {
    logBlogs() { //shorter version of the above
        //console.log(this.blogs);  //'this' is a context object. refers to 'user' object
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};


user.logBlogs();
console.log(this);  //window object
