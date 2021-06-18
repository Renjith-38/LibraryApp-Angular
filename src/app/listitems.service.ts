import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListitemsService {

  constructor(private http:HttpClient) { }
  getBooks(){
    console.log("Sending req to sever");
    return this.http.get("books/getbooks");
  }

  getAuthors(){
    console.log("request to fetch authors");
    return this.http.get("authors/getauthors");
  }

  getSingleBook(id:any):Observable<any>{
    return this.http.get<any>("books/"+id);
  }

  getSingleAuthor(id:any):Observable<any>{
    return this.http.get<any>("authors/"+id);
  }
}
