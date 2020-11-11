import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email
  password

  constructor(private authent: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authent.signInUser(this.email, this.password)
    this.router.navigate(['']);
  }

}
