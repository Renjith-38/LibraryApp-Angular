import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataserviceService } from '../dataservice.service';
import { ListitemsService } from '../listitems.service';
import { AuthorModel } from './author.model';


@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.css']
})
export class AuthorslistComponent implements OnInit {
  title:String = "Authors";
  
  imageWidth: Number = 50;
  imageMargin: Number = 2;

  authors: AuthorModel[]=[];

  constructor(private listService: ListitemsService,private router:Router,private dataService:DataserviceService,public authService:AuthenticationService) { }

  ngOnInit(): void {
    this.listService.getAuthors().subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }

  editAuthor(author: any){
    localStorage.setItem('editAuthorid',author._id.toString());
    this.router.navigate(['edit-author']);
  }

  deleteAuthor(author:any){
    var retVal = confirm("Are you sure you want to delete");
    if(retVal){
      this.dataService.deleteAuthor(author._id)
      .subscribe((data)=>{
        this.authors = this.authors.filter(p=>p!==author);
      })
    }
    else{
      this.router.navigate(['authors']);
    }
  }

}
