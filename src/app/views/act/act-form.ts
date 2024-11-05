import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCreateProfileForm() {

    return new FormGroup({
        date: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        nomenclatures: new FormControl([], Validators.required)
    });

}

export function getEditProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        date: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        nomenclatures: new FormControl([])
    });

}