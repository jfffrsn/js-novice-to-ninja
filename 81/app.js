//todo step 3
//event delegation
const addForm = document.querySelector('.add');
const list =  document.querySelector('.todos');
const search =document.querySelector('.search input');

//reusable function
const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim(); //trim removes whitespace before and after

    //check if empty
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset(); //reset input fields in form
    }

});


//delete todos
//contains - checks if classlist contains delete class
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); //parent is li
    }
});


//resusable function
const filteredTodos = (term) => {

    Array.from(list.children) //convert html collection into an array
    .filter((todo) => !todo.textContent.toLowerCase().includes(term)) //array that don't include term
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children) //convert html collection into an array
    .filter((todo) => todo.textContent.toLowerCase().includes(term)) //array that DOES include term
    .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
});
