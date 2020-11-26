import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile
  constructor(private authenService: AuthenticationService,public router: Router) { }

  ngOnInit(): void {
    this.userProfile = this.authenService.userInfo
  }
  logout(){
    console.log("loggin out");
    this.authenService.logout();
    this.router.navigateByUrl("");
  }
}
