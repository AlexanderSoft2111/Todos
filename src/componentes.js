import { todoList } from './index.js';
import {Todo} from './class';

// Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar    = document.querySelector('.clear-completed');
const ulFiltros    = document.querySelector('.filters');
const anchorFiltros    = document.querySelectorAll('.filtro');


 export const crearTodoHtml = (todo) => {

  //Creamos con backtips para interpolar strings y empaquetar el html
        const htmlTodo = `
            <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
					<div class="view">
						<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
						<label>${todo.tarea}</label>
						<button class="destroy"></button>
				    </div>
				<input class="edit" value="Create a TodoMVC template">
			</li>
        `
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;

        //Añadimos el primero elmento que encerramos en el div
        divTodoList.append(div.firstElementChild);

        return div.firstElementChild;
        
}
    
//Eventos de los componentes html

//Con este evento le decimos que al dar enter en la caja de texto crea un nuevo elemento en el arreglo y a la vez el html y reiniciamos la caja de texto
txtInput.addEventListener('keyup', (event) => {
        if(event.keyCode === 13  && txtInput.value.length > 0){
            const nuevoTodo = new Todo(txtInput.value); 
            todoList.agregarTodo(nuevoTodo);
            crearTodoHtml(nuevoTodo);
            txtInput.value = '';
        }
});

//Con este evento determinado que elemento damos click y marcamos como completado cuando damos en el input y borramos cuando damos en el boton de la X
divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //input label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute ('data-id');
    
    if ( nombreElemento.includes ('input') ) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    
});    

//Con este evento borramos todos los elementos del arreglo que tengan la clase completado
btnBorrar.addEventListener('click', () => {
    todoList.eliminarTodosCompletados();
    
    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

//Evento para filtrar segun el contenido del boton 
ulFiltros.addEventListener('click', (event) => {
    
    const filtro = event.target.text;
    if(!filtro) return;

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden')
                }
                break;
                
                case 'Completados':
                    if(!completado){
                    elemento.classList.add('hidden')
                    
                }
                break;
        
            default:
                break;
        }
    }

});



 
