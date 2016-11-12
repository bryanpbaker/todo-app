import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';


@Injectable()
export class TodosService {

  private TODO_URL = 'https://todo-api-bb.herokuapp.com';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.TODO_URL + '/todos')
               .toPromise()
               .then(response => { 
                    var todoList = response.json();
                    return todoList;
                  }
                )
               .catch(this.handleError);
  }

  completeTodo(todo: Todo): Promise<Todo> {
    return this.http
              .put(this.TODO_URL + '/todos/' + todo.id, JSON.stringify(todo), {headers: this.headers})
              .toPromise()
              .then((res) => console.log(res.json()));
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return this.http
              .put(this.TODO_URL + '/todos/' + todo.id, JSON.stringify(todo), {headers: this.headers})
              .toPromise()
              .then((res) => console.log(res.json()));
  }

  handleError(): void {
    console.error('There was an error');
  }

}
