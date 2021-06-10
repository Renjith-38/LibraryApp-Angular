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
  submitted = false;
  book = this.fb.group({
    bookTitle:['',[Validators.required]],
    authorName:['',[Validators.required]],
    yearOfPublication:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
    genre:['',[Validators.required]],
    image:['',[Validators.required]],
    description:['',[Validators.required]]

  })

  ngOnInit(): void {
  }

  AddBook(){
    this.submitted = true;
    this.dataService.AddBooks(this.book.value);
    console.log(this.book.value);
    alert('Book has Been Successfuly added!');
    this.router.navigate(['/books']);
  }

  get bookForm(){
    return this.book.controls;
  }

}
