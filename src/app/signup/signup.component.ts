import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  errorMsg: String;
  constructor(private router:Router,private fb:FormBuilder,private authService:AuthenticationService) { }
  signupForm = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    mobile:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
  })

  ngOnInit(): void {
  }
  get formControl(){
    return this.signupForm.controls;
  }

  userSignup(){
    this.submitted = true;
    this.errorMsg='';
    // console.log(this.signupForm.value);
    this.authService.userSignup(this.signupForm.value).subscribe(
      res =>{
        alert('User has been registered');
        this.router.navigate(['login']);
      },
      err =>{
        if(err.status == 422){
          this.errorMsg=err.error;
          
        }
      }
    )
  }

}
