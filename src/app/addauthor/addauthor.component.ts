import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private dataService:DataserviceService) { }
  author = this.fb.group({
    authorName:[''],
    yearOfBirth:[''],
    image:[''],
    description:['']
  });


  ngOnInit(): void {
  }
  Addauthor(){
    this.dataService.AddAuthor(this.author.value);
    console.log(this.author.value);
    alert("Author has been Successfuly added!");
    this.router.navigate(['/authors']);
  }

}
