export class Todo {

    //metodo estatico para instanciar la clase todo y poder instanciar nuevamente todo el string que nos da el localstorage y convertirlo en objetos para manteners sus propiedades
    static fromsJson({id,tarea,completado,creado}){

        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.tarea      = tarea;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

//definimos como va a lucir un todo
    constructor(tarea){

        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    };

//metodo de un todo
    imprimir(){
        console.log(`${this.tarea} ${this.id}`)
    }

}
