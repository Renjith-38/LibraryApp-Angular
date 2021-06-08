import { Component, OnInit } from '@angular/core';
import { ListitemsService } from '../listitems.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {
  title:String = "Books";
  
  imageWidth: Number = 50;
  imageMargin: Number = 2;

  //store books to display
  books: BookModel[]=[];

  constructor(private  listService:ListitemsService) { }


  ngOnInit(): void {
    this.listService.getBooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
    })
  }

}
