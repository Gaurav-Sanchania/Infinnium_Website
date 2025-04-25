/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
import { Observable } from "rxjs/internal/Observable";
import { AuthSessionService } from "../guards/authSession";
import { ConfigService } from "./configService.service";

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private BASE_URL;
  
  constructor(private httpClient: HttpClient, private auth: AuthSessionService, private config: ConfigService) { 
    this.BASE_URL = this.config.apiBaseUrl;
  }

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

  async getAuthorDetails(guid: string): Promise<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; isActive: boolean }> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ id: number; name: string; description: string; email: string; designation: string; guid: string; image: string; socialMediaLink: string; isActive: boolean }>
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
    
  //------------------------------------------------------------------------------------------------------------------------------------------

  editAuthorDetails(author: any) {
    try {
      //console.log("author service called");
      const formData = new FormData();

      formData.append("Image", author.image);
      formData.append("Name", author.name);
      formData.append("Email", author.email);
      formData.append("Designation", author.designation);
      formData.append("Description", author.description);
      formData.append("LinkedInLink", author.linkedin);
      formData.append("Guid", author.id);
      formData.append("ImageName", author.image.name);

       const token = this.auth.getToken();
       const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.httpClient.post(`${this.BASE_URL}/AuthorController/EditAuthorDetails`, formData, {headers}).subscribe();
      //console.log("Api called");
      return "Successfull";
    } catch (error) {
      throw error;
    }
  }

  // NOT TO BE USED
  addImagesInAuthor(Image: any): Observable<any> {
    const formData = new FormData();
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    formData.append('Image', Image.image);

    return this.httpClient.post(`${this.BASE_URL}/AuthorController/AddImage`, formData, {headers});
  }

}
