const theme = document.getElementById("theme");
const input = document.getElementById('input');
const todoList = document.getElementById('todo-list');
const list = document.getElementById('list');
const filterControl = document.getElementById('filter-control');


// THEME TOGGLE
theme.addEventListener('click', () => {
    theme.classList.toggle('moon');
    document.body.classList.toggle('dark');
    input.classList.toggle('dark');
    todoList.classList.toggle('dark');
    filterControl.classList.toggle('dark');
    list.classList.toggle('dark');
});