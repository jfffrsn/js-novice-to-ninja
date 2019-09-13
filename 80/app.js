//todo step 2
//event delegation
const addForm = document.querySelector('.add');
const list =  document.querySelector('.todos');

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
