import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  AddBooks(book: any){
    return this.http.post("http://localhost:3000/books/insert",{'book':book})
    .subscribe(data=>{console.log(data)});
  }
  AddAuthor(author:any){
    return this.http.post("http://localhost:3000/authors/insert",{'author':author})
    .subscribe(data=>{console.log(data)});
  }
}
