import { Todo } from '../classes'
import { todoList } from '../index';

//HTML references
const divTodoList       = document.querySelector('.todo-list')
const newTodoEvent      = document.querySelector('.new-todo');
const deleteBtn         = document.querySelector('.clear-completed');
const allTasks          = document.querySelector('.all');
const pendingTasks      = document.querySelector('.pending');
const completedTasks    = document.querySelector('.completed');

export const createTodoHTML = ( todo ) => {

    const htmlTodo = `
    <li class="${ ( todo.completed ) ? ' completed' : ' ' }" data="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : ' '}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

//Events
newTodoEvent.addEventListener('keyup', (event) =>{

    if ( event.keyCode === 13 && newTodoEvent.value.length > 0 ){
    
        const newTodo = new Todo(newTodoEvent.value);
        todoList.newTodo(newTodo);

        createTodoHTML(newTodo);

        newTodoEvent.value = '';
    
    }
    
});

divTodoList.addEventListener('click', (event) =>{

    const nameOfElement = event.target.localName;
    const todoElement   = event.target.parentElement.parentElement;
    const ID            = todoElement.getAttribute('data');


    if (nameOfElement.includes('input')){

        todoList.markTaskCompleted( ID );
        todoElement.classList.toggle( 'completed' );

    } else if ( nameOfElement.includes('button') ) {

        todoList.deleteTodo( ID );
        divTodoList.removeChild(todoElement);
        
    }

    
});

deleteBtn.addEventListener( 'click', () => {

    todoList.deleteTaskCompleted();
    for ( let i = divTodoList.children.length - 1; i >= 0; i-- ){

        const element = divTodoList.children[i];

        if ( element.classList.contains('completed') ) {
            divTodoList.removeChild( element );
        }

    }

    
});

allTasks.addEventListener( 'click', () => {

    if(allTasks.classList.contains('active')){
        
        allTasks.classList.remove('active');

    } else {

        pendingTasks.classList.remove('active');
        allTasks.classList.add('active');
        completedTasks.classList.remove('active');

    }

    for ( let i = divTodoList.children.length-1; i >= 0; i-- ){

        const element = divTodoList.children[i];
        if (element.classList.contains('hidden')){
            element.classList.remove('hidden');
        }

    }

});

pendingTasks.addEventListener( 'click', ()=> {

    if(pendingTasks.classList.contains('active')){
        
        pendingTasks.classList.remove('active');

    } else {

        pendingTasks.classList.add('active');
        allTasks.classList.remove('active');
        completedTasks.classList.remove('active');

    }

    for ( let i = divTodoList.children.length-1; i >= 0; i-- ){

        const element = divTodoList.children[i];
        if (element.classList.contains('completed')){
            element.classList.add('hidden');
        } else {
            element.classList.remove('hidden');
        };

    }

});

completedTasks.addEventListener( 'click', () => {

    if(completedTasks.classList.contains('active')){
        
        completedTasks.classList.remove('active');

    } else {

        pendingTasks.classList.remove('active');
        allTasks.classList.remove('active');
        completedTasks.classList.add('active');

    }
    

    for ( let i = divTodoList.children.length-1; i >= 0; i-- ){

        const element = divTodoList.children[i];
        if (!element.classList.contains('completed')){
            element.classList.add('hidden');
        } else {
            element.classList.remove('hidden');
        };

    }

});