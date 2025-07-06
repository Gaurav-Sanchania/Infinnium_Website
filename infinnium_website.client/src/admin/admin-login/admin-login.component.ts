/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService.service';
import { AuthSessionService } from '../../guards/authSession';

@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  isVisible = false;
  isLogin = false;
  message = "Invalid admin username or password. Please try again.";
  isSubmitted = false;
  baseStyle = 'input-group';
  invalidStyle = 'input-group input-invalid';



  constructor(
    private loginService: LoginService,
    private route: Router,
    private auth: AuthSessionService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.maxLength(50)]),
    password: new FormControl(''),
  });

  showValidationPopup() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      //console.log("Form is invalid! Fix the errors before submitting.");
      this.showValidationPopup();
      this.loginForm.markAllAsTouched();
      return;
    }

    try {
      const loginValid = await this.loginService.loginValidation(
        this.loginForm.value
      );

      if (loginValid) {
        // this.auth.setToken('true');
        this.route.navigate(['dashboard']);
      } else {
        // this.route.navigate(['login']);
        // alert('Invalid User');
        this.showValidationPopup();
      }
    } catch (error) {
      // console.log(error);
    }
  }
}
