import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import * as _ from 'lodash';

import { NewTodoComponent } from '../new-todo/new-todo.component';

import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('editControlsState', [
      state('closed', style({
        height: '0',
        opacity: '0'
      })),
      state('open', style({
        height: '105px',
        opacity: '1'
      })),
      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('500ms ease-out')),
    ])
  ]
})
export class TodosComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ) {}

  todos: Todo[];
  
  fetchTodos(): void {
    this.todosService.getTodos().subscribe( todos => {
      this.todos = todos;
      this.todos.forEach(todo => {
        todo.editControlsState = 'closed';
      });
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
    this.todosService.updateTodo(todo);
    todo.editControlsState = (todo.editControlsState === 'open' ? 'closed' : 'open');
    setTimeout(() => {
      todo.editMode = !todo.editMode;
    }, 300)
  }

  deleteTodo(todo) {
    if(confirm('You sure?') === true) {
      this.todosService.deleteTodo(todo);
      this.todos = this.todos.filter(t => t !== todo);
      todo.editControlsState = (todo.editControlsState === 'closed' ? 'open' : 'closed');
      todo.editMode = !todo.editMode;
    }
  }

  editMode(todo) {
    todo.editControlsState = (todo.editControlsState === 'open' ? 'closed' : 'open');
    setTimeout(() => {
      todo.editMode = true;
    }, 200)
    console.log(todo.editControlsState);
  }
  
  ngOnInit() {
    this.fetchTodos();
  }

  ngOnChanges() {
    this.fetchTodos();
  }

}
