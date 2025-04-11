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

    // All https methods are yet to be tested

  async getAllNews(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    (`https://localhost:7046/NewsAndEventsController/GetAllNews`));
            return response;
        } catch (error) {
            // console.log(error);
            return [];
        }
    }

  async getNewsDetails(guid: string): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    (`https://localhost:7046/NewsAndEventsController/GetNewsDetails/${guid}`));
            return response;
        } catch (error) {
            // console.log(error);
            return [];
        }
    }

  async getTop3News(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    ("https://localhost:7046/NewsAndEventsController/Top3News"));
            return response;
        } catch (error) {
            // console.log(error);
            return [];            
        }
    }

    addNewsAndEvents(blog: any) {
        try {
            this.httpClient.post("https://localhost:7046/NewsAndEventsController/AddNews", blog).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }

    editNewsAndEvents(blog: any) {
        try {
            this.httpClient.post("https://localhost:7046/NewsAndEventsController/EditNews", blog).subscribe();
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
