/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class ContactUsService {
    constructor(private httpClient: HttpClient) {}
    
    // All https methods are yet to be tested
        // tested: addContactUs, sendEmail

    async getAllContactUs(): Promise<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]> {
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]>
                (`https://localhost:7046/ContactUsController/GetAllContactUs`));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getContactUsDetails(id: number): Promise<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]> {
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; firstName: string; lastName: string; email: string; message: string; phone: string; }[]>
                (`https://localhost:7046/ContactUsController/ContactUsDetails/${id}`));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // tested
    addContactUs(FirstName: string, Email: string, Message: string) {
        try {
          this.httpClient.post("https://localhost:7046/ContactUsController/CreateContactUs", { FirstName, Email, Message }).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    updateContactUs(contactUs: any) {
        try {
            this.httpClient.put("https://localhost:7046/ContactUsController/UpdateContactUs", contactUs).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    deleteContactUs(id: number) {
        try {
            this.httpClient.delete(`https://localhost:7046/ContactUsController/DeleteContactUs/${id}`).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //tested
    sendEmail(receiver: string, subject: string, body: string) {
      try {
        //console.log(receiver, subject, body);
            this.httpClient.post("https://localhost:7046/ContactUsController/SendEmail", { receiver, subject, body }).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
