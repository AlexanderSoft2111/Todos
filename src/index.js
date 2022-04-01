import './styles.css'

import {Todo, TodoList} from './class';
import { crearTodoHtml } from './componentes';

export const todoList = new TodoList();

todoList.todoList.forEach(todo => crearTodoHtml(todo));

todoList.todoList[0].imprimir();


console.log(todoList);