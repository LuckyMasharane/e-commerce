import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public contactForm: FormGroup;
  email
  password
  loggonInUser
  constructor(private authent: AuthenticationService,private router: Router,private _formBuilder: FormBuilder,) { 
    this.contactForm = this._formBuilder.group({
      email: "",
      password: ""
    });
   }

  ngOnInit(): void {
    this.authent.getCurrentUser()

  }
  

  login(){
    console.log(this.contactForm.value.email);
    this.authent.signInUser(this.contactForm.value.email, this.contactForm.value.password)
    this.loggonInUser = this.authent.userInfo
    this.router.navigate(['/home']);
  }

  // resetPassword() {
  //   this.authent.resetPassword(this.email)
  //   .then(() => console.log("Password Reset Success"))
  // }

}
