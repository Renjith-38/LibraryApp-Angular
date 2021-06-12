import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http:HttpClient) { }

  userSignup(user:any){
    // console.log('Reached Servicce');
    return this.http.post("http://localhost:3000/signup",{'user':user});
    // .subscribe(data=>{console.log(data)});
  }

  userLogin(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/login",{'user':user})
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
