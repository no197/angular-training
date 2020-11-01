import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidators {
  static canNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { canNotContainSpace: true }
    }
    return null;
  }
  static shoudBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        console.log("oke");
        if (control.value === 'Yen')
          resolve({ shouldBeUnique: true })
        else resolve(null);
      }, 2000);
    })


  }
}
