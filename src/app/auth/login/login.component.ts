import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService
    ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const {email, password} = this.loginForm.value
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Yep! Logged in successfully',
        loading: 'Logging in...',
        error: 'Oops. There was an error'
      })
      ).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }


}
