/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: "root",
})

export class ContactUsService {
    private readonly BASE_URL = environment.base_api_Url;

    // const token = localStorage.getItem('jwtToken');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    constructor(private httpClient: HttpClient) {}

    async getAllContactUs(): Promise<{ firstName: string; email: string; message: string; isActive: boolean }[]> {
        try {
            const token = sessionStorage.getItem('auth-token');
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            const response = await firstValueFrom(
                this.httpClient.get<{ firstName: string; email: string; message: string; isActive: boolean }[]>
                (`${this.BASE_URL}/ContactUsController/GetAllContactUs`, {headers}));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // async getContactUsDetails(id: number): Promise<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]> {
    //     try {
    //         const response = await firstValueFrom(
    //             this.httpClient.get<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]>
    //             (`https://localhost:7046/ContactUsController/ContactUsDetails/${id}`));
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // }

    addContactUs(FirstName: string, Email: string, Message: string) {
        try {
          this.httpClient.post(`${this.BASE_URL}/ContactUsController/CreateContactUs`, { FirstName, Email, Message }).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    updateContactUs(contactUs: any) {
        const formData = new FormData();

      formData.append('isActive', contactUs.isActive);
      formData.append('Id', contactUs.guid);

        try {
            this.httpClient.post(`${this.BASE_URL}/ContactUsController/UpdateContactUs`, formData).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    // deleteContactUs(id: number) {
    //     try {
    //         this.httpClient.delete(`https://localhost:7046/ContactUsController/DeleteContactUs/${id}`).subscribe();
    //         return 'Successful';
    //     } catch (error) {
    //         console.log(error);
    //         return error;
    //     }
    // }

  sendEmail(receiver: string, subject: string, body: string): Observable<any> {
      
        //console.log(receiver, subject, body);
    return this.httpClient.post(`${this.BASE_URL}/ContactUsController/SendEmail`, { receiver, subject, body }, { responseType: 'text' });
      
    }
}
