import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
    selector: '[validatePassword]'
})

export class PasswordValidator  {

    static MatchPassword(abstractControl: AbstractControl) {
        const password = abstractControl.get('password')!.value; // to get value in input tag
        const confirmPassword = abstractControl.get('confirmPassword')!.value; // to get value in input tag

        if (password != confirmPassword) {
            abstractControl.get('confirmPassword')!.setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }
}