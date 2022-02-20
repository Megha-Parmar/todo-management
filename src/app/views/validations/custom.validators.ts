import { Validators, FormControl } from "@angular/forms";

export class CustomValidators extends Validators {

    static noWhiteSpace(control: FormControl) {
        return control.value && control.value.trim().length > 0 ? null : { notEmpty: true };
    }

}