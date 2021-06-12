import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataserviceService } from '../dataservice.service';
import { ListitemsService } from '../listitems.service';
import { BookModel } from './book.model';
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
      <p>{{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name:String;

  constructor(public activeModal: NgbActiveModal) {}
}






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

  constructor(private  listService:ListitemsService,private router:Router,private dataService:DataserviceService,public authService:AuthenticationService,private modalService: NgbModal) { }


  ngOnInit(): void {
    this.listService.getBooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
    })
  }

  editBook(books:any){
    localStorage.setItem('editBookid',books._id.toString());
    this.router.navigate(['edit-book']);
  }

  deleteBook(book:any){
    var retVal = confirm("Do you want to delete?");
    if(retVal){
      // console.log('yes');
      this.dataService.deleteBook(book._id)
      .subscribe((data)=>{
        this.books = this.books.filter(p=>p!==book);
      })
    }
    else{
      // console.log('no');
      this.router.navigate(['books']);
    }
    
  }
  open(description:any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = description;
  }
}
