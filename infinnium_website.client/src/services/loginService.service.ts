/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { AuthSessionService } from "../guards/authSession";
import { Router } from "@angular/router";
import { ConfigService } from "./configService.service";

@Injectable({
    providedIn: "root",
})

export class LoginService {
  private BASE_URL;

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    constructor(private httpClient: HttpClient, private auth: AuthSessionService, private router: Router, private config: ConfigService) {
      this.BASE_URL = this.config.apiBaseUrl;
    }

    async loginValidation(loginCredentials: any): Promise<boolean> {
      const email = loginCredentials.email;
      const password = loginCredentials.password;

      try {
        const response: boolean = await firstValueFrom(
          this.httpClient.post<boolean>(
          `${this.BASE_URL}/AdminController/CheckUser`, { email, password })
        );

        if (response) {
          localStorage.setItem('isAdminLoggedIn', 'true');
          await this.generateJwtToken();
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Login validation failed:', error);
        return false;
      }
    }

    async generateJwtToken(): Promise<void> {
      try {
        const response = await firstValueFrom(
          this.httpClient.post(`${this.BASE_URL}/AuthController/GenerateToken`, null, { responseType: 'text' })
        );

        if(response) {
          // console.log(response);
          this.auth.setToken(String(response));
          this.setupTokenExpirationTimer(response);
        }
      } catch (error) {
        console.error('Token generation failed:', error);
      }
    }

    setupTokenExpirationTimer(token: string) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000; // Convert to milliseconds

      const timeUntilExpiration = expirationTime - Date.now();
      
      if (timeUntilExpiration > 0) {
        setTimeout(() => {
          this.logout();
        }, timeUntilExpiration);
      } else {
        this.logout();
      }
    }
    
    async logout() {
      localStorage.removeItem('isAdminLoggedIn');

      try {
        // const response = await firstValueFrom(
        //   this.httpClient.post(`${this.BASE_URL}/AdminController/Logout`, null, { responseType: 'text' })
        // );

        // if(response) {
          // console.log(response);
          setTimeout(() => {
            this.auth.clearToken();
            this.router.navigate(['/login']);
          }, 500);
        // }
      } catch (error) {
        console.error('Logout API failed:', error);
      }
    }

  // Not to be used
  async fetchUserMasterList() {
    let listUserMaster: object[] = [];
    try {
      listUserMaster = await firstValueFrom(
        this.httpClient.get<object[]>(`${this.BASE_URL}/AdminController/GetAllUserMaster....`));
      return listUserMaster;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
