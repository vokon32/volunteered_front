import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [AuthService],
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private router: Router, private authService: AuthService) {

  }

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err : any) => console.log(err)
        });
    }
  }
}
