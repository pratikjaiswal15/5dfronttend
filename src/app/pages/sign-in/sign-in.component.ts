import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService, Credentials } from 'src/app/services/user.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthenticationService } from 'src/app/services/authentication.service';

@UntilDestroy()

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public fb: FormBuilder, public userService : UserService,public authenticationService: AuthenticationService) { }

  
  get email() {
    return this.signInForm.get('email')
  }

  get password() {
    return this.signInForm.get('password')
  }

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })


  ngOnInit(): void {
  }

  login(cred : Credentials) {
     console.log(cred)
     this.userService.login_user(cred)
     .pipe(untilDestroyed(this))
     .subscribe((data : any)  => {
       console.log(data)
        this.authenticationService.login(data)       
     }) 
  }

  logout() {
    this.authenticationService.logout()
  }
}
