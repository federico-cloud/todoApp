export class TodoList {

    constructor(){

        this.loadLocalStorage();

    }

    newTodo( todo ) {

        this.todos.push( todo );
        this.saveLocalStorage();

    }

    deleteTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveLocalStorage();

    }

    markTaskCompleted( id ) {

        for ( const todo of this.todos ) {

            if ( todo.id  == id ) {

                todo.completed = !todo.completed;
                break;

            }

            this.saveLocalStorage();


        }

    }

    deleteTaskCompleted(){
        
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();

    }

    saveLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    
    }

    loadLocalStorage(){
        
        this.todos = ( localStorage.getItem('todo') ) 
                                ? JSON.parse( localStorage.getItem('todo') ) 
                                : [];

    }
}