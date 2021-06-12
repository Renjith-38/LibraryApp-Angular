import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { EditauthorsComponent } from './editauthors/editauthors.component';
import { EditbooksComponent } from './editbooks/editbooks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'books',component:BookslistComponent},
  {path:'authors',component:AuthorslistComponent},
  {path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},
  {path:'addauthor',canActivate:[AuthGuard],component:AddauthorComponent},
  {path:'edit-book',component:EditbooksComponent},
  {path:'edit-author',component:EditauthorsComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
