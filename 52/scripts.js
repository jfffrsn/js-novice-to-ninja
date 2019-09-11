//parents, children and siblings

//const article = document.querySelector('article');

//console.log(article.children);
//console.log(Array.from(article.children)); //turn html collection into an array. non-destructive.
//console.log(article.children);

//parent child relationship
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');

//parent
console.log(title.parentElement); //get parent element 'article'
console.log(title.parentElement.parentElement); //parent of parent 'body'

//sibling
console.log(title.nextElementSibling); //next sibling of the h2 'p'
console.log(title.previousElementSibling); //previous sibling doesn't exist 'null'

//chaining
console.log(title.nextElementSibling.parentElement.children);
//start with title, then get the next element sibling the 'p' tag
//then we get the parent element which is the article.
//finally we get the children which is all the elements inside
//the 'article' tag.
