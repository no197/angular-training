import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators {
  static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== "1234") {
          resolve({ inValidPassword: true })
        } else resolve(null)
      }, 1000)
    })
  }

  static isMatchPassword(control: AbstractControl) {
    let password = control.get("password")
    let passwordConfirm = control.get("passwordConfirm")

    if (password.value !== passwordConfirm.value)
      return { isNoMatch: true }
    return null;
  }
}
