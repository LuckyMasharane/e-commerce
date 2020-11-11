import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email
  password

  constructor(private authent: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.authent.signInUser(this.email, this.password)
  }

}
