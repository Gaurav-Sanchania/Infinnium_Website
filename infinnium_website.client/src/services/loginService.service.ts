/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class LoginService {
    constructor(private httpClient: HttpClient) {}

    async loginValidation(loginCredentials: any): Promise<boolean> {
      const email = loginCredentials.email;
      const password = loginCredentials.password;

      try {
        const response: boolean = await firstValueFrom(
          this.httpClient.post<boolean>(
          `https://localhost:7046/AdminController/CheckUser`, { email, password })
        );

        if (response) {
          localStorage.setItem('isAdminLoggedIn', 'true');
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Login validation failed:', error);
        return false;
      }
    }

  // Not to be used
  async fetchUserMasterList() {
    let listUserMaster: object[] = [];
    try {
      listUserMaster = await firstValueFrom(
        this.httpClient.get<object[]>("https://localhost:7046/AdminController/GetAllUserMaster...."));
      return listUserMaster;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
