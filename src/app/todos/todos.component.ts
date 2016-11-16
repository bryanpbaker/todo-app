import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { NewTodoComponent } from '../new-todo/new-todo.component';

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
    this.todosService.getTodos().subscribe( todos => {
      this.todos = todos;
    });
  }

  createTodo(todo) {
    this.todosService.createTodo(todo);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    this.todosService.completeTodo(todo);
  }

  updateTodo(todo) {
    todo.editMode = !todo.editMode;
    this.todosService.updateTodo(todo);
  }

  deleteTodo(todo) {
    this.todosService.deleteTodo(todo);
    this.todos = this.todos.filter(t => t !== todo);
  }

  editMode(todo) {
    todo.editMode = true;
  }
  
  ngOnInit() {
    this.fetchTodos();
  }

  ngOnChanges() {
    this.fetchTodos();
  }

}
