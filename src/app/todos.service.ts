import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';


@Injectable()
export class TodosService {

  private TODO_URL = 'https://todo-api-bb.herokuapp.com';  // URL to web api

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

  handleError(): void {
    console.error('There was an error');
  }

}
