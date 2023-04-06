import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input'
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
    const newDescInput = document.querySelector(ElementIDs.newTodoInput);
    const todoListUL   = document.querySelector(ElementIDs.todoList);

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


}