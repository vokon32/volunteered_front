import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCreateProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        date: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        fundId: new FormControl(null, Validators.required),
        users: new FormControl([])
    });

}

export function getEditProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        date: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        fundId: new FormControl(null, Validators.required),
        users: new FormControl([])
    });

}