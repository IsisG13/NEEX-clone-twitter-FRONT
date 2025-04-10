import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  loading: boolean = false;
  registered: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.registered = params['registered'] === 'true';
    });
    // Redirecionar se já estiver logado
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;
        if (error.error && error.error.message) {
          this.error = error.error.message;
        } else {
          this.error = 'Email ou senha inválidos.';
        }
      }
    );
  }
}
