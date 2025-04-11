/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class LoginService {
    constructor(private httpClient: HttpClient) {}

    // All https methods are yet to be tested

    async fetchUserMasterList() {
        let listUserMaster: object[] = [];
        try {
            listUserMaster = await firstValueFrom(
              this.httpClient.get<object[]>("https://localhost:7046/AdminController/GetAllUserMaster"));
            return listUserMaster;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async loginValidation(loginCredentials: any) {
        const email = loginCredentials.email;
        const password = loginCredentials.password;

        const userMasterList = await this.fetchUserMasterList();

        const validUser = userMasterList.find((user) =>
            (user as any).email === email && (user as any).password === password)

        if(validUser) {
            localStorage.setItem("user", JSON.stringify(validUser));
            localStorage.setItem('isAdminLoggedIn', 'true');
            return true; // Login successful
        } else {
            return false; // Login failed
        }
    }
}
