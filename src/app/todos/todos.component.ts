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
      console.log(this.todos);
    });
  }
  
  ngOnInit() {
    this.fetchTodos();
  }

}
