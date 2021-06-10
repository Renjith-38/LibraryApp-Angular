import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from '../bookslist/book.model';
import { DataserviceService } from '../dataservice.service';
import { ListitemsService } from '../listitems.service';

@Component({
  selector: 'app-editbooks',
  templateUrl: './editbooks.component.html',
  styleUrls: ['./editbooks.component.css']
})
export class EditbooksComponent implements OnInit {
  book: BookModel[];
  bookForm:FormGroup;

 

  constructor(private listService:ListitemsService,private dataService:DataserviceService,private fb:FormBuilder,private router:Router) { }
  submitted = false;
  

  ngOnInit(): void {
      this.submitted = false;
      // this.editBooks();
      let bookId = localStorage.getItem('editBookid');      
      this.getBook(bookId);
      this.bookForm = this.fb.group({
        _id:[''],
        bookTitle:['',[Validators.required]],
        authorName:['',[Validators.required]],
        yearOfPublication:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
        genre:['',[Validators.required]],
        image:['',[Validators.required]],
        description:['',[Validators.required]]
        })      

  }

  getBook(bookId:any){
    this.listService.getSingleBook(bookId).subscribe(data=>{
      console.log(data['_id']);
      this.bookForm.setValue({
        _id: data['_id'],
        bookTitle: data['bookTitle'],
        authorName: data['authorName'],
        yearOfPublication: data['yearOfPublication'],
        genre:data['genre'],
        image:data['image'],
        description:data['description']
      })
    })
  }

  get formControl(){
    return this.bookForm.controls;
  }

  updateBook(){
    this.submitted=true;
    console.log(this.bookForm.value);
    this.dataService.updateBook(this.bookForm.value);
    alert("Book has been updated!")
    localStorage.removeItem('editBookid');
    this.router.navigate(['books']);
  }


  // editBooks(){
  //   this.bookForm = this.fb.group({
  //     bookTitle:['',[Validators.required]],
  //     authorName:['',[Validators.required]],
  //     yearOfPublication:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
  //     genre:['',[Validators.required]],
  //     image:['',[Validators.required]],
  //     description:['',[Validators.required]]
  
  //   })
  // }
}
