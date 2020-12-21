const theme = document.getElementById("theme");
const input = document.getElementById('input');
const todoList = document.getElementById('todo-list');
const list = document.getElementById('list');
const filterControl = document.getElementById('filter-control');
const clearButton  = document.getElementById('clear-list');
let LIST = [];
let id = 0;
const COMPLETE = 'fa-check-circle';
const INCOMPLETE = 'fa-circle';
const LINE_THROUGH = 'line-through';
let checkButton = document.getElementsByTagName("i");


// THEME TOGGLE
theme.addEventListener('click', () => {
    theme.classList.toggle('moon');
    document.body.classList.toggle('dark');
    input.classList.toggle('dark');
    todoList.classList.toggle('dark');
    filterControl.classList.toggle('dark');
    list.classList.toggle('dark');
});

// INPUT EVENT LISTENER
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo, id, false);
            //AMEND LIST
            LIST.push( {
                name: toDo,
                id: id,
                done: false,
            });
        }
        //RESET INPUT VALUE TO BLANK
        input.value = "";
        id++;
    }   
});

// LIST ITEM TOGGLE EVENT LISTENER
list.addEventListener('click', function(event){
    let element = event.target;
    completeToDo(element);
})

// CLEAR COMPLETED
clearButton.addEventListener('click', () => {
    list.innerHTML = "";
})


// ADD TODO
function addToDo(toDo, id, done) {
    const DONE = done ? COMPLETE : INCOMPLETE;
    const LINE = done ? LINE_THROUGH : "";
    const text = `<li class="item">
                    <i class="far ${DONE}" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

// COMPLETE TODO
function completeToDo (element) {
    element.classList.toggle(COMPLETE);
    element.classList.toggle(INCOMPLETE);
    element.parentNode.querySelector('.text').classList.toggle
    (LINE_THROUGH);
}





