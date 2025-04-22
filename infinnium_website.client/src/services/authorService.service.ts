/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private readonly BASE_URL = environment.base_api_Url;

  // const token = localStorage.getItem('jwtToken');
  // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  constructor(private httpClient: HttpClient) { }

  async getAllAuthors(): Promise<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; }[]> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; }[]>
          (`${this.BASE_URL}/AuthorController/GetAllAuthors`));
      const updatedResponse = response.map(item => {
        if (item.image) {
          item.image = `data:image/jpeg;base64,${item.image}`;
        }
        return item;
      });
      return updatedResponse;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }

  async getAuthorDetails(guid: string): Promise<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; }> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; }>
          (`${this.BASE_URL}/AuthorController/AuthorDetails/${guid}`));
      if (response.image) {
        response.image = `data:image/jpeg;base64,${response.image}`;
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  addImagesInAuthor(Image: any): Observable<any> {
    const formData = new FormData();
    formData.append('Image', Image.image);

    return this.httpClient.post(`${this.BASE_URL}/AuthorController/AddImage`, formData);
  }

}
