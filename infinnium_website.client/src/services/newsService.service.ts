/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class NewsService {
    constructor(private httpClient: HttpClient) {}

  async getAllNews(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    (`https://localhost:7046/NewsAndEventsController/GetAllNews`));

          const updatedResponse = response.map(item => {
            if (item.image) {
              item.image = `data:image/jpeg;base64,${item.image}`;
            }
            return item;
          });
          return updatedResponse;
        } catch (error) {
            // console.log(error);
            return [];
        }
    }

  async getNewsDetails(guid: string): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean }> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean }>
                    (`https://localhost:7046/NewsAndEventsController/GetNewsDetails/${guid}`));
          if (response.image) {
            response.image = `data:image/jpeg;base64,${response.image}`;
          }
          return response;
        } catch (error) {
            // console.log(error);
            throw [];
        }
    }

  async getTop3News(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    ("https://localhost:7046/NewsAndEventsController/Top3News"));
          const updatedResponse = response.map(item => {
            if (item.image) {
              item.image = `data:image/jpeg;base64,${item.image}`;
            }
            return item;
          });
          return updatedResponse;
        } catch (error) {
            // console.log(error);
            return [];            
        }
  }

  async getAllNewsAdmin(): Promise<{
    id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string;
  }[]> {
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{
          id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
          imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string;
        }[]>
          (`https://localhost:7046/NewsAndEventsController/GetAllNewsAdmin`));

      const updatedResponse = response.map(item => {
        if (item.image) {
          item.image = `data:image/jpeg;base64,${item.image}`;
        }
        return item;
      });
      return updatedResponse;
    } catch (error) {
      // console.log(error);
      return [];
    }
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

    addNewsAndEvents(blog: any) {
      try {
        const formData = new FormData();

        formData.append('Image', blog.image);
        formData.append('Title', blog.title);
        formData.append('Description', blog.description);
        formData.append('Brief', blog.brief);
        formData.append('PublishedDate', blog.publishedDate);
        formData.append('AuthorId', blog.authorId);
        formData.append('ImageName', blog.image.name);

        this.httpClient.post("https://localhost:7046/NewsAndEventsController/AddNews", formData).subscribe();
        return 'Successful';
      } catch (error) {
        // console.log(error);
        return error;
      }
    }

  editNewsAndEvents(blog: any) {
    try {
      const formData = new FormData();

      formData.append('Image', blog.image);
      formData.append('Title', blog.title);
      formData.append('Description', blog.description);
      formData.append('Brief', blog.brief);
      formData.append('PublishedDate', blog.publishedDate);
      formData.append('AuthorId', blog.authorId);
      formData.append('ImageName', blog.image.name);
      formData.append('isActive', blog.isActive);
      formData.append('Id', blog.id);

      //console.log(formData);

      this.httpClient.post("https://localhost:7046/NewsAndEventsController/EditNews", formData).subscribe();
      return 'Successful';
    } catch (error) {
      // console.log(error);
      return error;
    }
    }

    deleteNewsAndEvents(id: number) {
        try {
            this.httpClient.post(`https://localhost:7046/NewsAndEventsController/DeleteNews/${id}`, id).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }
}
