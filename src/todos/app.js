import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    clearCompleted: '.clear-completed',
    newTodoInput:   '#new-todo-input',
    todoList:       '.todo-list',
    todoFilters:    '.filter',
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.todoList, todos);
    }

    (() =>{

        const app = document.createElement('div');
        app.innerHTML = html;

        document.querySelector(elementId).appendChild(app);

        displayTodos();
    })();

    //HTML references
    const newDescInput   = document.querySelector(ElementIDs.newTodoInput);
    const todoListUL     = document.querySelector(ElementIDs.todoList);
    const clearCompleted = document.querySelector(ElementIDs.clearCompleted);
    const filtersLI      = document.querySelectorAll(ElementIDs.todoFilters);

    //Listeners
    newDescInput.addEventListener('keyup', (event) =>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    })

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    
    todoListUL.addEventListener('click', (event) => {
        if(event.target.className === 'destroy'){
            const element = event.target.closest('[data-id]');
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        }
        
    })

    clearCompleted.addEventListener('click', (event) => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersLI.forEach(element =>{
        element.addEventListener('click', (event) =>{
            filtersLI.forEach(li => li.classList.remove('selected'));
            event.target.classList.add('selected');

            switch(event.target.text){
                case 'All':
                    todoStore.setFilter(Filters.All);
                break;
                case 'Pending':
                    todoStore.setFilter(Filters.Pending);
                break;
                case 'Completed':
                    todoStore.setFilter(Filters.Compeleted);
                break;
            }
            displayTodos();
        });
    })

}