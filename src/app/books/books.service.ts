import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IBook } from './book';

@Injectable()
export class BooksService {

  private booksUrl = 'http://localhost:5000/api/books';

  constructor( private _http: HttpClient) { }

  getBooks(): Observable<IBook[]>{
    return this._http.get<IBook[]>(this.booksUrl);
  }

}