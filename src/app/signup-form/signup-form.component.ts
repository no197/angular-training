import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.canNotContainSpace
    ], UsernameValidators.shoudBeUnique),
    password: new FormControl('', Validators.required)
  })

  login() {
    this.form.setErrors({ inValidLogin: true })
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
