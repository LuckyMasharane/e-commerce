import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public contactForm: FormGroup;

  user:User

  constructor(private _formBuilder: FormBuilder,private authent: AuthenticationService) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      firstname: "",
      lastName: "",
      email: "",
      password: ""
    });
  }
  
  signUp(){
    this.authent.signUpUser(this.contactForm.value)
  }
}
