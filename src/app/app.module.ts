import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditbooksComponent } from './editbooks/editbooks.component';
import { EditauthorsComponent } from './editauthors/editauthors.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookslistComponent,
    AuthorslistComponent,
    AddbookComponent,
    AddauthorComponent,
    EditbooksComponent,
    EditauthorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
