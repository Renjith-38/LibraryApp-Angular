import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListitemsService {

  constructor(private http:HttpClient) { }
  getBooks(){
    console.log("Sending req to sever");
    return this.http.get("http://localhost:3000/books/getbooks");
  }

  getAuthors(){
    console.log("request to fetch authors");
    return this.http.get("http://localhost:3000/authors/getauthors");
  }
}
