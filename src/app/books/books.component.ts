import { Component, OnInit } from '@angular/core';

import { IBook } from '../books/book';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: IBook[] = [];
  selectedBook: IBook;

  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this._booksService.getBooks()
      .subscribe(books => {
        this.books = books;
      },
        error => console.log(error)
      );
  }

  onSelect(book: IBook): void{
    this.selectedBook = book;
  }




}