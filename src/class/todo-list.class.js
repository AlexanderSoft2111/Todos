import {Todo} from './todo.class'

export class TodoList{

    constructor(){
        this.cargarLocalStorage();
    }

    agregarTodo(todo){
        this.todoList.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todoList = this.todoList.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    };
    
    marcarCompletado(id){
        
        for(const todo of this.todoList){


            if(todo.id == id){

                todo.completado = !todo.completado;
                break;
            }
        }

    };
    
    eliminarTodosCompletados(){
        this.todoList = this.todoList.filter(todo => !todo.completado);
        console.log(this.todoList);
        this.guardarLocalStorage();
        
    };

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todoList));
    }

    cargarLocalStorage(){

        this.todoList = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todoList = this.todoList.map(obj => Todo.fromsJson(obj));

    }

}