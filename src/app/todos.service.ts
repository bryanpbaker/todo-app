import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Todo } from './todo';


@Injectable()
export class TodosService {

  private TODO_URL = 'https://todo-api-bb.herokuapp.com';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http
               .get(this.TODO_URL + '/todos')
               .map( response => {
                 var todoList = response.json();
                 return todoList;
               });
  }

  createTodo(todo: Todo) {
    // return this.http
    //           .post(this.TODO_URL + '/todos', todo)
    //           .toPromise()
    //           .then(res => console.log(res));
    console.log(todo);
  }

  completeTodo(todo: Todo): Promise<Todo> {
    return this.http
              .put(this.TODO_URL + '/todos/' + todo.id, JSON.stringify(todo), {headers: this.headers})
              .toPromise()
              .then((res) => console.log('Completed: ' + res.json().description));
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return this.http
              .put(this.TODO_URL + '/todos/' + todo.id, JSON.stringify(todo), {headers: this.headers})
              .toPromise()
              .then((res) => console.log('Updated: ' + res.json().description));
  }

  deleteTodo(todo: Todo): Promise<Todo> {
    return this.http
              .delete(this.TODO_URL + '/todos/' + todo.id)
              .toPromise()
              .then((res) => {
                this.getTodos();
                console.log(res)
              }); 
  }

  handleError(): void {
    console.error('There was an error');
  }

}
