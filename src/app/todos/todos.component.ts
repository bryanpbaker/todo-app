import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ) {}

  todos: Todo[];
  
  fetchTodos(): void {
    this.todosService.getTodos().then( todos => {
      this.todos = todos;
    });
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    this.todosService.completeTodo(todo);
  }

  updateTodo(todo) {
    todo.completed = !todo.completed;
    this.todosService.updateTodo(todo);
  }

  editMode(todo) {
    todo.editMode = true;
  }
  
  ngOnInit() {
    this.fetchTodos();
  }

}
