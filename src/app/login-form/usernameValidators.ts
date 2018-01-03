import {FormControl} from '@angular/forms';

export class UsernameValidators {

    static shouldBeUnique(formControl: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if (formControl.value == 'gergo') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000)
        });
    }

    static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true};
        } else {
            return null;
        }
    }
}
