import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  constructor(private httpClient: HttpClient) { }

  async getAllAuthors(): Promise<{ id: number; name: string; description: string; email: string; designation: string; guid: string; }[]> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ id: number; name: string; description: string; email: string; designation: string; guid: string; }[]>
          (`https://localhost:7046/AuthorController/GetAllAuthors`));
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getAuthorDetails(guid: string): Promise<{ id: number; name: string; description: string; email: string; designation: string; guid: string; }[]> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ id: number; name: string; description: string; email: string; designation: string; guid: string; }[]>
          (`https://localhost:7046/AuthorController/AuthorDetails/${guid}`));
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
