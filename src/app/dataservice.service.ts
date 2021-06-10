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

  updateBook(book: any){
    console.log('Book Update');
    return this.http.put("http://localhost:3000/books/update",book)
    .subscribe(data=>{console.log(data)});
  }

  updateAuthor(author:any){
    console.log('Author update');
    return this.http.put("http://localhost:3000/authors/update",author)
    .subscribe(data=>{console.log(data)});
  }

  deleteBook(id:any){
    return this.http.delete("http://localhost:3000/books/delete/"+id);
  }

  deleteAuthor(id:any){
    return this.http.delete("http://localhost:3000/authors/delete/"+id);
  }
}
