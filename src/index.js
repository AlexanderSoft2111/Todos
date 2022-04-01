import './styles.css'

//importando las clases 
import {TodoList} from './class';
import { crearTodoHtml } from './componentes';

//Hay que colocar la palabra export para exportar el arrat de todos
export const todoList = new TodoList();

//Recorremos cada unos de los elementos para crear su contenido HTML
todoList.todoList.forEach(todo => crearTodoHtml(todo));

//Con este método educativo podemos imprimir propiedades que no se guardan en el localStorage
todoList.todoList[0].imprimir();
