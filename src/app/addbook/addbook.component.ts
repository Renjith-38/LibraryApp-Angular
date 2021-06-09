import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../bookslist/book.model';
import { DataserviceService } from '../dataservice.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private dataService:DataserviceService,private router:Router,public fb:FormBuilder) { }
  book = this.fb.group({
    bookTitle:[''],
    authorName:[''],
    yearOfPublication:[''],
    genre:[''],
    image:[''],
    description:['']

  })

  ngOnInit(): void {
  }

  AddBook(){
    this.dataService.AddBooks(this.book.value);
    console.log(this.book.value);
    alert('Book has Been Successfuly added!');
    this.router.navigate(['/books']);
  }

}
