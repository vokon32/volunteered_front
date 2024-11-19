import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCreateProfileForm() {

    return new FormGroup({
        shortName: new FormControl('тестова назва', Validators.required),
        number: new FormControl('0', Validators.required),
        measure: new FormControl('measure', Validators.required),
        currency: new FormControl('currency', Validators.required)
    });

}

export function getEditProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        shortName: new FormControl('тестова назва'),
        number: new FormControl('0'),
        measure: new FormControl('measure', Validators.required),
        currency: new FormControl('currency', Validators.required)
    });

}