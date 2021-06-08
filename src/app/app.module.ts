import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookslistComponent,
    AuthorslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
