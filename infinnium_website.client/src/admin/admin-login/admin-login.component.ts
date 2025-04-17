import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService.service';
import { AuthSessionService } from '../../guards/authSession';

@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private loginService: LoginService, private route: Router, private auth: AuthSessionService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)
    ]),
    password: new FormControl("")
  });

  async onSubmit() {
    if (this.loginForm.invalid) {
      //console.log("Form is invalid! Fix the errors before submitting.");
      return; 
    }

    try {
      const loginValid = await this.loginService.loginValidation(this.loginForm.value);
  
      if (loginValid) {
        this.auth.setToken('true');
        this.route.navigate(["Dashboard"]);
      } else {
        this.route.navigate(["Login"]);
        alert("Invalid User");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
