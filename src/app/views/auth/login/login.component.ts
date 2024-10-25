import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { error } from 'console';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private authService: AuthService, private messageService: MessageService) {

  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue())
        .pipe(
          tap((res: any) => {
            localStorage.setItem('authUser', res.data);
          })
        )
        .subscribe({
          next: (res: any) => {
            if (this.authService.isLoggedIn()) {
              this.router.navigate(['/app/settings']);
            }
          },
          error: (err: any) => {
            this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
            console.log(err);
          }
        });
    }
  }
}
