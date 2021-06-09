import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { BookslistComponent } from './bookslist/bookslist.component';

const routes: Routes = [
  {path:'books',component:BookslistComponent},
  {path:'authors',component:AuthorslistComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'addauthor',component:AddauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
