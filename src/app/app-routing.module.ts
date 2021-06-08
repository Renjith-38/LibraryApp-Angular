import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { BookslistComponent } from './bookslist/bookslist.component';

const routes: Routes = [
  {path:'books',component:BookslistComponent},
  {path:'authors',component:AuthorslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
