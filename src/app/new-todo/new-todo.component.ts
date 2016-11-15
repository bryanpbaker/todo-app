import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  private location: Location
  private route: ActivatedRoute

  constructor() { }

  addTodo(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
