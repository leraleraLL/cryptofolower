import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/shared/auth.service';

export function minlength(control: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    if (password?.length < control.value ) {
      return {
        minlength: true
      }
    }
    return null
  }
}

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],

})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
  }, 
  { validators: passwordsMatchValidator()})

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  get name() {
    return this.signUpForm.get('name')
  }
  get email() {
    return this.signUpForm.get('email')
  }
  get password() {
    return this.signUpForm.get('password')
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')
  }
  submit() {
    if (!this.signUpForm.valid) return;
    const { name, email, password } = this.signUpForm.value
    this.authService.singUp(name, email, password).pipe(
      this.toast.observe({
        success: 'Great! You are all signed up',
        loading: 'Signing in...',
        error: ({message}) => `${message}` 
            })
      ).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

}
