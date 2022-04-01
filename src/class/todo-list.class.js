import {Todo} from './todo.class'

export class TodoList{

    //Cargamos el arreglo que guardamos en el localStorage
    constructor(){
        this.cargarLocalStorage();
    }

    //Agregamos un todo al arreglo y lo guardamos en el localStorage
    agregarTodo(todo){
        this.todoList.push(todo);
        this.guardarLocalStorage();
    }
    
    //Eliminamos un todo del arreglo y lo guardamos en el localStorage
    eliminarTodo(id){
        
        this.todoList = this.todoList.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    };
    
    //Actualizamos una propiedad de un todo del arreglo 
    marcarCompletado(id){
        
        for(const todo of this.todoList){
            

            if(todo.id == id){

                todo.completado = !todo.completado;
                break;
            }
        }

    };
    
    //Eliminamos todos los todos con la propiedad completado en true y actualizamos el arreglo y el localStorage 
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