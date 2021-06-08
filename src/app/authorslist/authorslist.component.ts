import { Component, OnInit } from '@angular/core';
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

  constructor(private listService: ListitemsService) { }

  ngOnInit(): void {
    this.listService.getAuthors().subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }

}
