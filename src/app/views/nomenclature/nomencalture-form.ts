import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCreateProfileForm() {

    return new FormGroup({
        shortName: new FormControl('', Validators.required),
        amount: new FormControl('0', Validators.required),
        measure: new FormControl('', Validators.required),
    });

}

export function getEditProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        shortName: new FormControl(''),
        amount: new FormControl('0', Validators.required),
        measure: new FormControl('', Validators.required)
    });

}

export enum Measure{
    kg = 0,
    piece = 1,
    liters = 2
}