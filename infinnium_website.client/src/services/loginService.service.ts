/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../environments/environment";
import { AuthSessionService } from "../guards/authSession";

@Injectable({
    providedIn: "root",
})

export class LoginService {
    private readonly BASE_URL = environment.base_api_Url;

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    constructor(private httpClient: HttpClient, private auth: AuthSessionService) {}

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
        }
      } catch (error) {
        console.error('Token generation failed:', error);
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
