import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListitemsService } from './listitems.service';
import { DataserviceService } from './dataservice.service';
import { AuthenticationService } from './authentication.service';
import { TokenInterceptorService } from './token-interceptor.service';

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
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ListitemsService,DataserviceService,AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
