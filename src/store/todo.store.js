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

export default {
    initStore
}