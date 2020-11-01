import { PasswordValidators } from './password.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, [PasswordValidators.validOldPassword]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    }, { validators: PasswordValidators.isMatchPassword })
  }

  get oldPassword() {
    return this.form.get("oldPassword")
  }

  get password() {
    return this.form.get("password")
  }
  get passwordConfirm() {
    return this.form.get("passwordConfirm")
  }

  log() {
    console.log(this.form.errors)
  }
  ngOnInit(): void {
  }

}
