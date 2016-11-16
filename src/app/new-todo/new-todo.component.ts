import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private todosService: TodosService
  ) { }

  addTodo(todo: Todo): void {
    
    if(!todo) { return; }

    this.todosService.createTodo(todo)

    this.location.back();
  }

  ngOnInit() {
  }

}
