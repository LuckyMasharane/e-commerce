import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  loggedUser
  constructor(public authService:AuthenticationService){
  }
  ngOnInit(){
    this.loggedUser = this.authService.userInfo
    console.log(this.loggedUser );
  }
}
