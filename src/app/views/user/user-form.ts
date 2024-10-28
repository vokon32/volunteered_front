import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCreateProfileForm() {

    return new FormGroup({
        email: new FormControl('', Validators.required),
        cardNumber: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        selectedFund: new FormControl('', Validators.required)
    });

}

export function getEditProfileForm() {

    return new FormGroup({
        id: new FormControl(),
        cardNumber: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        selectedFund: new FormControl('', Validators.required)
    });

}