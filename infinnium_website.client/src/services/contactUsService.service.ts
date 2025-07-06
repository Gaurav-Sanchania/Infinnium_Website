/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthSessionService } from '../guards/authSession';
import { ConfigService } from './configService.service';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  private BASE_URL;

  constructor(
    private httpClient: HttpClient,
    private auth: AuthSessionService,
    private config: ConfigService
  ) {
    this.BASE_URL = this.config.apiBaseUrl;
  }

  async getAllContactUs(): Promise<
    { firstName: string; email: string; message: string; isActive: boolean }[]
  > {
    try {
      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const response = await firstValueFrom(
        this.httpClient.get<
          {
            firstName: string;
            email: string;
            message: string;
            isActive: boolean;
          }[]
        >(`${this.BASE_URL}/ContactUsController/GetAllContactUs`, { headers })
      );
      return response;
    } catch (error) {
      //   console.log(error);
      return [];
    }
  }

  addContactUs(FirstName: string, Email: string, Message: string) {
    return this.httpClient.post(
      `${this.BASE_URL}/ContactUsController/CreateContactUs`,
      {
        FirstName,
        Email,
        Message,
      }
    );
  }

  updateContactUs(contactUs: any) {
    const formData = new FormData();
    formData.append('isActive', contactUs.isActive);
    formData.append('Id', contactUs.guid);
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    try {
      this.httpClient
        .post(
          `${this.BASE_URL}/ContactUsController/UpdateContactUs`,
          formData,
          { headers }
        )
        .subscribe();
      return 'Successful';
    } catch (error) {
      //   console.log(error);
      return error;
    }
  }

  sendEmail(receiver: string, subject: string, body: string): Observable<any> {
    //console.log(receiver, subject, body);
    return this.httpClient.post(
      `${this.BASE_URL}/ContactUsController/SendEmail`,
      { receiver, subject, body },
      { responseType: 'text' }
    );
  }
}
