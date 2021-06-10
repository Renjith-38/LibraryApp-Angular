import { variable } from '@angular/compiler/src/output/output_ast';
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
  submitted = false;
  author = this.fb.group({
    authorName:['',[Validators.required]],
    yearOfBirth:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
    image:['',[Validators.required]],
    description:['',[Validators.required]]
  });


  ngOnInit(): void {
  }
  Addauthor(){
    this.submitted = true;
    this.dataService.AddAuthor(this.author.value);
    console.log(this.author.value);
    alert("Author has been Successfuly added!");
    this.router.navigate(['/authors']);
  }

  get authorForm(){
    return this.author.controls;
  }
}
