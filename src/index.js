
import './styles.css';
import { Todo, TodoList } from './classes';
import { createTodoHTML } from './js/componentes';

const todoList = new TodoList();
const task = new Todo('Aprender JS');

todoList.newTodo(task);


console.log(todoList);

createTodoHTML(task);