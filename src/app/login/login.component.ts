import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  errorMsg: String;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private authService:AuthenticationService
  ) { }


  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  get formControl(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  userLogin(){
    this.submitted=true;
    this.errorMsg='';
    this.authService.userLogin(this.loginForm.value).subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        this.router.navigate(['books']);
      },
      err=>{
        alert(err.error);
      }
    )
      
    
  }
}
