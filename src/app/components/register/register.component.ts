import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: ['', Validators.required],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('password_confirmation')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const { name, email, password, password_confirmation } =
      this.registerForm.value;

    this.authService
      .register(name, email, password, password_confirmation)
      .subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/login'], {
            queryParams: { registered: 'true' },
          });
        },
        (error) => {
          this.loading = false;
          if (error.error && error.error.errors) {
            this.error = Object.values(error.error.errors).join(', ');
          } else {
            this.error =
              'Ocorreu um erro ao tentar registrar. Tente novamente.';
          }
        }
      );
  }
}
