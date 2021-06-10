import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { EditauthorsComponent } from './editauthors/editauthors.component';
import { EditbooksComponent } from './editbooks/editbooks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'books',component:BookslistComponent},
  {path:'authors',component:AuthorslistComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'addauthor',component:AddauthorComponent},
  {path:'edit-book',component:EditbooksComponent},
  {path:'edit-author',component:EditauthorsComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
