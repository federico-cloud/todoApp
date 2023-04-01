import { Todo } from "../models/todo.model"

const Filters = {

    All:        'all',
    Compeleted: 'Completed',
    Pending:    'Pending',

}

const state = {
    
    todos:[
        new Todo('1'),
        new Todo('2'),
        new Todo('3')
    ],
    fillter: Filters.All

}

const initStore = () =>{
    console.log('Store inicializado');
    console.log(state)
}

const loadStore = () =>{
    throw new Error('is not implemented');
}

const addTodo = (desc) =>{
    throw new Error('is not implemented');
}

const toogleTodo = (todoId) =>{
    throw new Error('is not implemented');
}

const deleteTodo = (todoId) =>{

}

const deleteCompleted = () =>{
    throw new Error('is not implemented');
}

const setFilter = (newFilter = Fillters.All) =>{
    throw new Error('is not implemented');
}

const getCurrentFilter = () =>{
    throw new Error('is not implemented');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toogleTodo,
}