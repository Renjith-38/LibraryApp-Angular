import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataserviceService } from '../dataservice.service';
import { ListitemsService } from '../listitems.service';
import { AuthorModel } from './author.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Description</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <img src="{{image}}"  width="80px" height="100px" alt="">
      <p>{{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name:String;
  @Input() image:String;

  constructor(public activeModal: NgbActiveModal) {}
}





@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.css'],
})
export class AuthorslistComponent implements OnInit {
  title:String = "Authors";
  
  imageWidth: Number = 50;
  imageMargin: Number = 2;

  authors: AuthorModel[]=[];

  constructor(private listService: ListitemsService,private router:Router,private dataService:DataserviceService,public authService:AuthenticationService,private modalService: NgbModal) { }

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
  
  open(author:any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = author.description;
    modalRef.componentInstance.image = author.image;
  }
}
