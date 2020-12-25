import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(public authenticationService :AuthenticationService, private router : Router) {
      this.initializeApp()
  }
  initializeApp(){
    
    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['add-moment']);
      } else {
        this.router.navigate(['sign-up']);
      }
    });
    
   }
}
