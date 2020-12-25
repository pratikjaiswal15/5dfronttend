import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { User, UserService } from 'src/app/services/user.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

@UntilDestroy()

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public fb: FormBuilder, public userService : UserService, public router : Router) { }

  get first_name() {
    return this.signUpForm.get('first_name')
  }

  get last_name() {
    return this.signUpForm.get('last_name')
  }

  get email() {
    return this.signUpForm.get('email')
  }


  get password() {
    return this.signUpForm.get('password')
  }

  get address() {
    return this.signUpForm.get('address')
  }

  signUpForm = this.fb.group({
    first_name : ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    last_name : ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    address : ['', [Validators.required, Validators.minLength(3)]]
  })


  ngOnInit(): void {
  }

  signup(form : User) {
    console.log(form)
    this.userService.add_user(form)
    .pipe(untilDestroyed(this))
    .subscribe(data => {
      console.log(data)
      this.router.navigate(['sign-in'])
    })
  }

}
