import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRouterModule } from './AppRouterModule';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksService } from './books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,

    HomeComponent,
    OrdersComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }