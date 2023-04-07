import { Todo } from "../models/todo.model"

const Filters = {
    All:        'all',
    Compeleted: 'Completed',
    Pending:    'Pending',
}

const state = {
    todos:[],
    filter: Filters.All
}

const initStore = () =>{
    loadStore();
}

const saveStorage = () =>{
    localStorage.setItem('todos', JSON.stringify(state));
}

const loadStore = () =>{
    if (localStorage.getItem('todos')) {
        const{todos  = [], filter = Filters.All} = JSON.parse(localStorage.getItem('todos'));
        state.todos  = todos;
        state.filter = filter
    }
}

const getTodos = (filter = Filters.All) => {

    switch (filter) {
        case Filters.All:
            return [...state.todos]    
        case Filters.Compeleted:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error('Option is not valid');
    }
}

const addTodo = (desc) =>{
    if (!desc) throw new Error('The description is required');
    state.todos.push(new Todo(desc));
    saveStorage();
}

const toggleTodo = (todoId) =>{
    state.todos = state.todos.map(todo => {
        todo.id === todoId ? todo.done = !todo.done : ''
        return todo;
    })
    saveStorage();
}

const deleteTodo = (todoId) =>{
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStorage();
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter(todo => !todo.done)
    saveStorage();
}

const setFilter = (newFilter = Filters.All) =>{
    state.filter = newFilter;
    saveStorage();
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}