import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public contactForm: FormGroup;
  email
  constructor(private _formBuilder: FormBuilder, private authenService: AuthenticationService,private router: Router) { 
    this.contactForm = this._formBuilder.group({
      email: "",
    });
  }

  ngOnInit(): void {
    // this.contactForm = this._formBuilder.group({
    //   email: "",
    // });
  }
  onSubmit() {
    console.log("reset");

    this.authenService.resetPassword(this.contactForm.value.email)
    this.router.navigate(['/login']);
  }

}
