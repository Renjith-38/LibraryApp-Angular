import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { ListitemsService } from '../listitems.service';

@Component({
  selector: 'app-editauthors',
  templateUrl: './editauthors.component.html',
  styleUrls: ['./editauthors.component.css']
})
export class EditauthorsComponent implements OnInit {
  authorForm: FormGroup
  submitted: boolean
  constructor(private listitemsService:ListitemsService,private dataService:DataserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
    let id = localStorage.getItem('editAuthorid');
    console.log(id);
    this.getAuthor(id);
    this.authorForm = this.fb.group({
      _id:[''],
      authorName:['',[Validators.required]],
      yearOfBirth:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      image:['',[Validators.required]],
      description:['',[Validators.required]]
    });
  }


  getAuthor(id:any){
    this.listitemsService.getSingleAuthor(id).subscribe(data=>{
      // console.log(data)
      this.authorForm.setValue({
        _id:data['_id'],
        authorName:data['authorName'],
        yearOfBirth:data['yearOfBirth'],
        description:data['description'],
        image:data['image']
      })
    })
  }

  updateAuthor(){
    this.submitted = true;
    console.log(this.authorForm.value);
    this.dataService.updateAuthor(this.authorForm.value);
    alert('Author has been updated');
    localStorage.removeItem('editAuthorid');
    this.router.navigate(['authors']);
  }

  get formControl(){
    return this.authorForm.controls;
  }

}
