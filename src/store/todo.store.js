import { Todo } from "../models/todo.model"

const Filters = {

    All:        'all',
    Compeleted: 'Completed',
    Pending:    'Pending',

}

const state = {
    
    todos:[
        new Todo('federico'),
        new Todo('estudia'),
        new Todo('urgente')
    ],
    filter: Filters.All

}

const initStore = () =>{
    console.log('Store inicializado');
}

const loadStore = () =>{
    throw new Error('is not implemented');
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
}

const toogleTodo = (todoId) =>{
    state.todos = state.todos.map(todo => {
        todo.id === todoID ? todo.done = !todo.done : ''
        return todo;
    })
}

const deleteTodo = (todoId) =>{
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter(todo => todo.done)
}

const setFilter = (newFilter = Filters.All) =>{
    state.filter = newFilter;
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
    toogleTodo,
}


// state.todos = state.todos.filter(todo => todo.done)

// console.log(state.todos)
